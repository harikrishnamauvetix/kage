import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const SidebarMenu = ({ service, slug }) => {
  const router = useRouter();
  const { slug: currentSlug, subpage: currentSubpage } = router.query;

 
  const [pageTitle, setPageTitle] = useState(service.page);


  const pageLink = `/speciality-clinics/${slug.replace(/ /g, "-")}`;

  const isMainPageActive =
    currentSlug === slug.replace(/ /g, "-") && !currentSubpage;

  return (
    <>
   

      {/* List of links */}
      <List className="sideSubmenu">
        {/* Main page link */}
        <ListItem
          button
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
                  {service.page || "Main Page"}
                </Typography>
              }
            />
          </Link>
        </ListItem>

        {/* Subpages */}
        {service?.subpages?.map((subpage) => {
          const subpageLink = `/speciality-clinics/${slug.replace(
            / /g,
            "-"
          )}/${subpage?.page.replace(/ /g, "-")}`;

          const isSubpageActive =
            currentSlug === slug.replace(/ /g, "-") &&
            currentSubpage === subpage?.page.replace(/ /g, "-");

          return (
            <ListItem
              button
              key={subpage?.page}
              sx={{
                backgroundColor: isSubpageActive
                  ? "primary.main"
                  : "transparent",
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
                      {subpage?.title || "No subpage title"}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default SidebarMenu;
