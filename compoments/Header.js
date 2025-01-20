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
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveMenuIndex(index);
    setActiveSubMenuIndex(null); // Close any open submenu when the main menu is opened
  };

  const handleSubMenuOpen = (event, subIndex) => {
    setSubMenuAnchorEl(event.currentTarget);
    setActiveSubMenuIndex(subIndex);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
    setActiveMenuIndex(null);
    setActiveSubMenuIndex(null); // Ensure the submenu is closed too
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "About us", href: "/about-us" },
    { label: "Doctors", href: "/doctors" },
    {
      label: "Speciality Clinics",
      href: "/speciality-clinics" ,
      subItems: websiteJson?.services?.map((service) => ({
        label: service.title,
        href: `/speciality-clinics/${service.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    {
      label: "Procedures",
      subItems: websiteJson?.procedures?.map((procedure) => ({
        label: procedure.title,
        href: `/procedures/${procedure.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`,
      })),
    },
    { label: "Patient Testimonials", href: "testimonials" },
    { label: "Doctor Videos", href: "doctorvideos" },
    { label: "Health Blogs", href: "blogs" },
    { label: "News & Events", href: "#" },
    { label: "Contact us", href: "#" },
  ];

  return (
    <>
      <Box sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link href="/home" passHref>
              <Box
                component="img"
                src="https://kage.co.in/assets/img/KAGE.jpg"
                alt="Logo"
                sx={{ height: 50 }}
              />
            </Link>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              {/* Contact Info */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "black" }}>
                  hello@kimscuddles.com
                </Typography>
                <PhoneIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "black" }}>
                  Call: 040 4488 5333
                </Typography>
              </Box>
            </Box>
          )}
        </Toolbar>
      </Box>
      <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1200 }}>
        <Toolbar>
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
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item, index) => (
                <Box
                  key={index}
                  onMouseEnter={(e) =>
                    item.subItems && handleMenuOpen(e, index)
                  }
                  onMouseLeave={handleMenuClose}
                  sx={{ position: "relative" }}
                >
                  {item.href ? (
                    <Link href={item.href} passHref>
                      <Button color="inherit">{item.label}</Button>
                    </Link>
                  ) : (
                    <Button color="inherit">{item.label}</Button>
                  )}

                  {item.subItems && (
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenuIndex === index}
                      onClose={handleMenuClose}
                      aria-hidden={activeMenuIndex !== index}
                      onClick={handleMenuClose}
                       className="menulist"
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <MenuItem
                          key={subIndex}
                         
                          onMouseEnter={(e) =>
                            subItem.subItems && handleSubMenuOpen(e, subIndex)
                          }
                          sx={{ cursor: "pointer" }} // Ensure submenu items are clickable
                        >
                          {subItem.href ? (
                            <Link href={subItem.href}>{subItem.label}</Link>
                          ) : (
                            <Typography>{subItem.label}</Typography>
                          )}
                        </MenuItem>
                      ))}
                    </Menu>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
