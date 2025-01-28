import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import websiteJson from "../public/website.json";
import BookAppointmentModal from "./BookAppointmentModal";

const Navbar = () => {
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

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  const navItems = [
    { label: "About us", href: "/about" },
    { label: "Doctors", href: "/doctors" },
    {
      label: "Speciality Clinics",
      href: "/speciality-clinics",
      subItems: websiteJson?.services?.map((service) => ({
        label: service.title,
        href: `/speciality-clinics/${service.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Procedures",
      href: "/procedures",
      subItems: websiteJson?.procedures?.map((procedure) => ({
        label: procedure.title,
        href: `/procedures/${procedure.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    { label: "Patient Testimonials", href: "/testimonials" },
    { label: "Doctor Videos", href: "/doctorvideos" },
    // { label: "Health Blogs", href: "blogs" },
    // { label: "News & Events", href: "#" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <>
      <Box
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
          <PhoneIcon sx={{ color: "#fff", marginRight: "5px" }} /> Call {websiteJson.hospitalInfo?.phoneNumber} To Book An Appointment
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link href="/home" passHref>
              <Box
                component="img"
                src={websiteJson.hospitalInfo?.companylogo}
                alt="Logo"
                sx={{ height: 100 }}
              />
            </Link>
          </Box>

          {!isMobile && (
          <Box sx={{ padding: 2, bgcolor: "background.paper", borderRadius: 1 }}>
          {/* Contact Info */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MailIcon sx={{ color: "primary.main" }} aria-label="Email Icon" />
              <Typography variant="body2" sx={{ color: "text.primary" }}>
              {websiteJson.hospitalInfo?.emailid}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon sx={{ color: "primary.main" }} aria-label="Phone Icon" />
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                Call: {websiteJson.hospitalInfo?.phoneNumber}
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
                  onClick={toggleDrawer(false)}
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
                      {item.href ? (
                        <MenuItem component={Link} href={item.href}>
                          {item.label}
                        </MenuItem>
                      ) : (
                        <Typography>{item.label}</Typography>
                      )}
                      {item.subItems &&
                        item.subItems.map((subItem, subIndex) => (
                          <Box key={subIndex} sx={{ pl: 2 }}>
                            {subItem.href ? (
                              <MenuItem component={Link} href={subItem.href}>
                                {subItem.label}
                              </MenuItem>
                            ) : (
                              <Typography>{subItem.label}</Typography>
                            )}
                            {subItem.subItems &&
                              subItem.subItems.map(
                                (nestedItem, nestedIndex) => (
                                  <Box key={nestedIndex} sx={{ pl: 4 }}>
                                    {nestedItem.href ? (
                                      <MenuItem
                                        component={Link}
                                        href={nestedItem.href}
                                      >
                                        {nestedItem.label}
                                      </MenuItem>
                                    ) : (
                                      <Typography>
                                        {nestedItem.label}
                                      </Typography>
                                    )}
                                  </Box>
                                )
                              )}
                          </Box>
                        ))}
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
                      <Button color="inherit">{item.label}</Button>
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
