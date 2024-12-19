// components/Navbar.js
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const navItems = [
    {
      label: "About us",
    },
    {
      label: "Doctors",
    },
    {
      label: "Patient Testimonials",
    },
    {
      label: "Doctor Videos",
    },
    {
      label: "Health Blogs",
    },
    {
      label: "News & Events",
    },
    {
      label: "Contact us",
    },
    // {
    //   label: "Paediatrics",
    //   subItems: [
    //     { label: "Paediatrics Services", href: "/services/web-development" },

    //   ],
    // },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div
        position="static" 
        sx={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", padding: "0 2rem" }}>
          {/* Logo Section */}
          <Box sx={{ display: "block", alignItems: "center", gap: 1 }}>
            <Box
              component="img"
              src="https://kage.co.in/assets/img/KAGE.jpg"
              alt="Logo"
              sx={{ height: 50 }}
            />
          </Box>

          <Box sx={{ display: "block", gap: 3 }}>
            {/* Contact Info and Navigation Links */}
            <Box sx={{ display: "block", alignItems: "center", gap: 4 }}>
              {/* Contact Info */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailIcon sx={{ color: "primary.main" }} />
                <Typography variant="body2" sx={{ color: "black" }}>
                  hello@kimscuddles.com
                </Typography>
                <PhoneIcon sx={{color:"primary.main" }} />
                <Typography
                  variant="body2"
                  sx={{color: "black"  }}
                >
                  Call: 040 4488 5333
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </div>

      {/* Sticky Navbar */}
      <AppBar position="sticky" color="primary" sx={{ top: 0, zIndex: 1200 }}>

        <Toolbar>
          <Box sx={{ display: "flex", gap: 2 }}>
            {navItems.map((item, index) => (
              <Box
                key={index}
                onMouseEnter={(e) => item.subItems && handleMenuOpen(e, index)}
                onMouseLeave={handleMenuClose}
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
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        onClick={handleMenuClose}
                        component="a"
                        href={subItem.href}
                      >
                        {subItem.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
