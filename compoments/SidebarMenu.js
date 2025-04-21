import React, { useState,useContext } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const SidebarMenu = ({ service }) => {
  const router = useRouter();
  const { subpage: currentSubpage } = router.query;

  const formatSlug = (slug) => slug?.toLowerCase().replace(/ /g, "-") || "";


  const currentSlug = service?.slug || router.query.slug;
  const basePath = router.pathname.split("/")[1];
  //console.log(currentSlug);
  const pageLink = `/${basePath}/${formatSlug(currentSlug)}`;

  const isMainPageActive = currentSlug === formatSlug(currentSlug) && !currentSubpage;

  return (
    
    <List  className="sideSubmenu">
      {/* Main Page Link */}
      <ListItem
        button
        disabled={!currentSlug}
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
                sx={{ fontSize: 14 }}
              >
                  <ArrowForwardIosIcon
                  sx={{
                    fontSize: 14, 
                    color: isMainPageActive ? "white" : "text.secondary",
                       marginRight:"5px"
                  }}
                />
                {service?.page || "Main Page"}
              </Typography>
            }
          />
        </Link>
      </ListItem>

      {/* Subpages */}
      {service?.subpages?.map((subpage) => {
        const subpageLink = `/${basePath}/${formatSlug(currentSlug)}/${formatSlug(subpage?.page)}`;
        const isSubpageActive = currentSubpage === formatSlug(subpage?.page);

        return (
          <ListItem
            button
            key={subpage?.page}
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
                    sx={{ fontSize: 14 }}
                  >
                         <ArrowForwardIosIcon
                  sx={{
                    fontSize: 14, 
                    color: isSubpageActive ? "white" : "text.secondary",
                       marginRight:"5px"
                  }}
                />
                    {subpage?.page || "No Subpage Title"}
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

export default SidebarMenu;
