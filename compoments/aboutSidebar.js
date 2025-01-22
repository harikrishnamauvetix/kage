import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const AboutsidebarMenu = ({ service }) => {
  const router = useRouter();
  const { slug: currentSlug} = router.query;

console.log(router.route,"currentslug");
  // Define main page and subpage links
  const pageLink = `/about/`;
  const isMainPageActive =  router.route && !currentSlug;
  console.log(pageLink,"pagelink");
  return (
    <List className="sideSubmenu">
     
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
                {service?.page || "Main Page"}
              </Typography>
            }
          />
        </Link>
      </ListItem>

   
      {service?.subpages?.map((subpage) => {
        
        const subpageLink = `/about/${subpage.page.replace(/ /g, "-")}`;;
        const isSubpageActive = currentSlug ===  subpage.page.replace(/ /g, "-")

        return (
          <ListItem
            button
            key={subpage.slug}
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
