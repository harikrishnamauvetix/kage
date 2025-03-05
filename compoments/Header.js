import React, { useEffect, useState,useContext } from "react";


import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import { DataContext } from '../pages/_app';
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
      const data = useContext(DataContext);
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
      subItems: data?.specialityclinics?.map((service) => ({
        label: service.title,
        href: `/speciality-clinics/${service.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Advanced Procedures",
      href: "/advanced-procedures",
      subItems: data?.advancedprocedures?.map((procedure) => ({
        label: procedure.title,
        href: `/advanced-procedures/${procedure.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Advanced Equipment",
      href: "/advanced-equipment",
      subItems: data?.services?.map((services) => ({
        label: services.title,
        href: `/advanced-equipment/${services.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Courses",
      href: "/courses",
      subItems: data?.courseDetails?.map((courses) => ({
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
      {/* <Box
        sx={{
          backgroundColor: "primary.main",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#fff",
            padding: "10px 0",
            textAlign: "center",
            fontSize: "20px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PhoneIcon sx={{ color: "#fff", marginRight: "5px" }} /> Call {data.hospitalInfo?.phoneNumber} To Book An Appointment
        </Typography>
      </Box> */}
      <Box sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link href="/home" passHref>
            <Box
                component="img"
                src={data.hospitalInfo?.companylogo}
                alt="Logo"
                sx={{ width: { xs: 200, sm: 200, md: 300 ,lg:"auto"}, height: "auto" }}
              />
            </Link>
          </Box>

          {!isMobile && (
            <Box
              sx={{ padding: 2, bgcolor: "background.paper", borderRadius: 1 }}
            >
              {/* Contact Info */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MailIcon
                    sx={{ color: "primary.main" }}
                    aria-label="Email Icon"
                  />
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    {data.hospitalInfo?.emailid}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon
                    sx={{ color: "primary.main" }}
                    aria-label="Phone Icon"
                  />
                  <Typography variant="body2" sx={{ color: "text.primary" }}>
                    Call: {data.hospitalInfo?.phoneNumber}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Box>
      <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1200 }}>
        <Toolbar
          sx={{ alignItems: "ceneter", justifyContent: "space-between" }}
        >
          {isMobile ? (
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
                          <Box sx={{ pl: 2 }}>
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
          ) : (
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
                  sx={{
                    backgroundColor: "secondary.main",
                    justifyContent: "right",
                  }}
                  onClick={handleOpen}
                >
                  Book an Appointment
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      <BookAppointmentModal open={isModalOpen} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
