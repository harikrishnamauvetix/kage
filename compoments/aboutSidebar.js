import React, { useState,useContext } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const AboutsidebarMenu = ({ service }) => {
  const router = useRouter();
  const { slug: currentSlug } = router.query;

  // console.log(router.route, "currentslug");
  // Define main page and subpage links
  // console.log(service, "pagename");
  const pageLink = `/about/`;
  const isMainPageActive = router.route && !currentSlug;
  // console.log(pageLink, "pagelink");
  return (
    <List disablePadding className="sideSubmenu">
      <ListItem
        button
        key={service?.page}
        sx={{
          backgroundColor: isMainPageActive ? "primary.main" : "transparent",
          "&:hover": {
            backgroundColor: isMainPageActive
              ? "primary.main"
              : "rgba(0, 0, 0, 0.08)",
          },
        }}
      >
        <Link href={pageLink} passHref>
          <ListItemText
            primary={
              <Typography
                variant="body1"
                color={isMainPageActive ? "white" : "textSecondary"}
                sx={{ fontSize: 14, display: "flex", alignItems: "center" }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 14,
                    color: isMainPageActive ? "white" : "text.secondary",
                    marginRight: "5px",
                  }}
                />
                {service?.page || service?.page}
              </Typography>
            }
          />
        </Link>
      </ListItem>

      {service?.subpages?.map((subpage, index) => {
        const subpageLink = `/about/${subpage.page.replace(/ /g, "-")}`;
        const isSubpageActive = currentSlug === subpage.page.replace(/ /g, "-");

        return (
          <ListItem
            button
            key={subpage.slug || `${subpage.page}-${index}`}
            sx={{
              backgroundColor: isSubpageActive ? "primary.main" : "transparent",
              "&:hover": {
                backgroundColor: isSubpageActive
                  ? "primary.main"
                  : "rgba(0, 0, 0, 0.08)",
              },
            }}
          >
            <Link href={subpageLink} passHref>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    color={isSubpageActive ? "#fff" : "textSecondary"}
                    sx={{ fontSize: 14, display: "flex", alignItems: "center" }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: 14, // Match the icon size with text
                        color: isSubpageActive ? "#fff" : "text.secondary",
                        marginRight: "5px",
                      }}
                    />
                    {subpage.title || "No Subpage Title"}
                  </Typography>
                }
              />
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default AboutsidebarMenu;
