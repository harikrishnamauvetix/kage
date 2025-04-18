import React, { useEffect, useState, useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import websiteJson from "../public/website.json";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { DataContext } from "../pages/_app";
import BookAppointmentModal from "./BookAppointmentModal";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  IconButton,
  Drawer,
  Box,
  MenuItem,
  Typography,
  Collapse,
} from "@mui/material";

const Navbar = () => {
  // const websiteJson = useContext(DataContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openMenu, setOpenMenu] = useState(null); // State to track open submenu

  const handleMouseEnter = (index) => {
    setOpenMenu(index); // Open submenu when hovering
  };

  const handleMouseLeave = () => {
    setOpenMenu(null); // Close submenu when leaving
  };
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [openMenus, setOpenMenus] = useState({});

  const handleToggleSubMenu = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const navItems = [
    { label: <HomeIcon />, href: "/home" },
    { label: "About us", href: "/about" },
    { label: "Doctors", href: "/doctors" },
    {
      label: "Speciality Clinics",
      href: "/speciality-clinics",
      subItems: websiteJson?.specialityclinics?.map((service) => ({
        label: service.title,
        href: `/speciality-clinics/${service.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Advanced Procedures",
      href: "/advanced-procedures",
      subItems: websiteJson?.advancedprocedures?.map((procedure) => ({
        label: procedure.title,
        href: `/advanced-procedures/${procedure.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Advanced Equipment",
      href: "/advanced-equipment",
      subItems: websiteJson?.services?.map((services) => ({
        label: services.title,
        href: `/advanced-equipment/${services.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Courses",
      href: "/courses",
      subItems: websiteJson?.courseDetails?.map((courses) => ({
        label: courses.title,
        href: `/courses/${courses.title.replace(/\s+/g, "-").toLowerCase()}`,
      })),
    },
    { label: "Patient Testimonials", href: "/testimonials" },
    { label: "Doctor Videos", href: "/doctorvideos" },
    // { label: "Health Blogs", href: "blogs" },
    // { label: "News & Events", href: "#" },
    // { label: "Contact us", href: "/contact" },
  ];

  return (
    <>
      <Box sx={{ position: "fixed", zIndex: "99", width: "100%" }}>
        <Box
          sx={{
            backgroundColor: "primary.main",
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding:"3px 0"
          }}
        >
          <Typography
            variant="body2"
            component="a"
            href={`tel:${websiteJson?.hospitalInfo?.kimsPhonenumber}`}
            sx={{
              color: "#fff",
              padding: {
                xs: "2px 0",
                sm: "2px 0",
              },
              textAlign: "center",
              fontSize: {
                xs: "15px",
                sm: "18px",
                md: "18px",
              },
              textDecoration: "underline",
              display: "inline-flex", // Important for vertical alignment
              alignItems: "center", // Center the icon with text
              justifyContent: "center", // Center all content horizontally
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#e6e6e6",
                textDecoration: "underline",
              },
            }}
          >
            <PhoneIcon
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "18px",
                  sm: "18px",
                  md: "18px",
                },
                mr: 1, // margin right for spacing between icon and text
              }}
            />
            Call {websiteJson?.hospitalInfo?.kimsPhonenumber} To Book An
            Appointment
          </Typography>
        </Box>

        <Box sx={{ backgroundColor: "white", boxShadow: "none" }}>
          <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
            {/* Logo Section */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Link href="/home" passHref>
                <Box
                  component="img"
                  src={websiteJson?.hospitalInfo?.companylogo}
                  alt="Logo"
                  sx={{
                    width: { xs: 200, sm: 200, md: 300, lg: "auto" },
                    height: "auto",
                  }}
                />
              </Link>
            </Box>
            {isMobile && (
              <>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: 2,
                      }}
                    >
                      <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    {navItems.map((item, index) => (
                      <Box key={index}>
                        <MenuItem>
                          <Link href={item.href || "#"} passHref>
                            {item.label}
                          </Link>
                          {item.subItems && (
                            <IconButton
                              size="small"
                              onClick={() => handleToggleSubMenu(index)}
                            >
                              {openMenus[index] ? (
                                <ExpandLessIcon />
                              ) : (
                                <ExpandMoreIcon />
                              )}
                            </IconButton>
                          )}
                        </MenuItem>
                        {item.subItems && (
                          <Collapse
                            in={openMenus[index]}
                            timeout="auto"
                            unmountOnExit
                          >
                            <Box sx={{ pl: 1 }}>
                              {item.subItems.map((subItem, subIndex) => (
                                <MenuItem key={subIndex}>
                                  <Link href={subItem.href || "#"} passHref>
                                    {subItem.label}
                                  </Link>
                                </MenuItem>
                              ))}
                            </Box>
                          </Collapse>
                        )}
                      </Box>
                    ))}
                  </Box>
                </Drawer>
              </>
            )}
            {!isMobile && (
              <Box
                sx={{
                  padding: 2,
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                {/* Contact Info */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <MailIcon
                      sx={{ color: "primary.main" }}
                      aria-label="Email Icon"
                    />
                    <Typography variant="body2" sx={{ color: "text.primary" }}>
                      {websiteJson?.hospitalInfo?.emailid}
                    </Typography>
                  </Box>
                  <Box
                    component="a"
                    href={`tel:${websiteJson?.hospitalInfo?.kimsPhonenumber}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      "&:hover": {
                        color: "#e6e6e6",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <PhoneIcon
                      sx={{ color: "primary.main" }}
                      aria-label="Phone Icon"
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.primary",
                        textDecoration: "underline",
                      }}
                    >
                      Call: {websiteJson?.hospitalInfo?.kimsPhonenumber}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Box>
        {!isMobile && (
          <AppBar
            position="sticky"
            color="primary"
            sx={{ top: 0, zIndex: "999999999" }}
          >
            <Toolbar
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <>
                <Box className="navbar" sx={{ display: "flex" }}>
                  {navItems.map((item, index) => (
                    <Box
                      key={index}
                      className="menu-item"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link href={item.href || "#"} passHref>
                        <Button
                          color="inherit"
                          sx={{ minWidth: "auto", justifyContent: "left" }}
                        >
                          {item.label}
                        </Button>
                      </Link>
                      {item.subItems && openMenu === index && (
                        <Box className="submenu">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              href={subItem.href || "#"}
                              passHref
                              key={subIndex}
                            >
                              <Typography className="submenulist">
                                {subItem.label}
                              </Typography>
                            </Link>
                          ))}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    component="a"
                    href={`tel:${websiteJson?.hospitalInfo?.kimsPhonenumber}`}
                    sx={{
                      backgroundColor: "secondary.main",
                      justifyContent: "right",
                      // maxWidth:"200px",
                      // display:"block"
                    }}
                    // onClick={handleOpen}
                  >
                    Book an Appointment
                  </Button>
                </Box>
              </>
            </Toolbar>
          </AppBar>
        )}
        <BookAppointmentModal open={isModalOpen} handleClose={handleClose} />
      </Box>
    </>
  );
};

export default Navbar;
