import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid2";
function Conditions({ conditions }) {
  console.log(conditions);
  if (!conditions) return null;

  return (
    <Box>
      <Typography variant="h6" sx={{ color: "secondary.main" }}>
        {conditions.heading}
      </Typography>

      <List
        disablePadding
        component="ul"
        sx={{
          padding: 0,
          listStyleType: "disc",
          pl: 2,
        }}
      >
        {conditions?.conditionsList?.map((condition, index) => (
          <ListItem
            key={index}
            component="li"
            sx={{
              display: "list-item",
              padding: 0,
            }}
          >
            <ListItemText primary={condition} />
          </ListItem>
        ))}

        {conditions?.lists?.map((condition, index) => (
          <ListItem key={index} sx={{ padding: "0px" }}>
            <ListItemText
              sx={{ padding: "0 !important" }}
              primary={condition?.title}
              secondary={condition.description}
              primaryTypographyProps={{ sx: { color: "primary.main" } }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Conditions;
