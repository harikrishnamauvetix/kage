import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from 'next/link';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeSubMenu, setActiveSubMenu] = React.useState(null); // New state for subSubItems

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuName);
  };

  const handleSubMenuOpen = (event, index, subIndex) => {
    setActiveSubMenu(`${index}-${subIndex}`);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { label: "About us", href: "#" },
    { label: "Doctors", href: "/doctors" },
    {
      label: "Speciality",
      href: "Services",
     
    },
    { label: "Patient Testimonials", href: "testimonials" },
    { label: "Doctor Videos", href: "doctorvideos" },
    { label: "Health Blogs", href: "blogs" },
    { label: "News & Events" },
    { label: "Contact us" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <Box sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
          {/* Logo Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Link  href="/home" passHref>
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

      {/* Sticky Navbar */}
      <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1200 }}>
        <Toolbar>
          {isMobile ? (
            <>
              <Box>
                <IconButton
                  color="inherit"
                  edge="start"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>

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
                    <MenuItem key={index} component="a" href={item.href}>
                      {item.label}
                    </MenuItem>
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
                  sx={{ position: "relative" }} // Ensure sub-menus can be positioned
                >
                  <Button color="inherit" href={item.href}>
                    {item.label}
                  </Button>
                  {item.subItems && (
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === index}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        onMouseEnter: () => setActiveMenu(index),
                        onMouseLeave: handleMenuClose,
                      }}
                      inert
                    >
                      {item.subItems.map((subItem, subIndex) => (
                        <MenuItem
                          key={subIndex}
                          onClick={handleMenuClose}
                          component="a"
                          href={subItem.href}
                          onMouseEnter={(e) =>
                            subItem.subSubItems &&
                            handleSubMenuOpen(e, index, subIndex)
                          }
                        >
                          {subItem.label}
                          {subItem.subSubItems && activeSubMenu === `${index}-${subIndex}` && (
                            <Menu
                              anchorEl={anchorEl}
                              open={true}
                              onClose={handleMenuClose}
                              sx={{
                                position: "absolute",
                                left: "200px", // Position sub-sub-menu to the right of the sub-item
                                top: 0,
                                zIndex: 1300, // Make sure it's above the parent menu
                              }}
                              inert
                            >
                              {subItem.subSubItems.map((subSubItem, subSubIndex) => (
                                <MenuItem key={subSubIndex} component="a" href={subSubItem.href}>
                                  {subSubItem.label}
                                </MenuItem>
                              ))}
                            </Menu>
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
