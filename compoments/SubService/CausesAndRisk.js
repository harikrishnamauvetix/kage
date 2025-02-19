import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import Grid from "@mui/material/Grid2";
const CausesAndRisk = ({ causesAndRisk = {} }) => {
  const { heading, list, description } = causesAndRisk;

  return (
    causesAndRisk && (
      <Stack sx={{ margin: "20px 0" }}>
        <Grid container>
          {heading && (
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <Typography variant="h6" sx={{ color: "secondary.main" }}>
                {heading}
              </Typography>
            </Grid>
          )}
          <List disablePadding>
            {list?.map((item, index) => (
              <ListItem disablePadding key={index}>
                <ListItemIcon sx={{ minWidth: "30px", marginRight: "10px" }}>
                  <CheckCircleIcon
                    sx={{
                      color: "primary.main",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.heading}
                  secondary={item.description}
                  primaryTypographyProps={{ sx: { color: "primary.main" } }}
                />
              </ListItem>
            ))}
          </List>
          {description && (
            <Typography variant="body1" sx={{ color: "text.primary" }}>
              {description}
            </Typography>
          )}
        </Grid>
      </Stack>
    )
  );
};

export default CausesAndRisk;
