import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from "@mui/material/Grid2";
function Conditions({ conditions }) {
  console.log(conditions);
  if (!conditions) return null;

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ margin: "10px 0", color: "secondary.main" }}
      >
        {conditions.heading}
      </Typography>

      <List sx={{ padding: "0px" }}>
        {conditions?.conditionsList?.map((condition, index) => (
          <ListItem key={index}  sx={{ padding: "0px" }}>
            <ListItemIcon sx={{minWidth:"30px",color:"primary.main"}}> 
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary={condition} />
          </ListItem>
        ))}
        {conditions?.lists?.map((condition, index) => (
          <ListItem key={index} sx={{ padding: "0px" }}>
            <ListItemText
              sx={{ padding: "0 !important" }}
              primary={condition.title && <strong>{condition.title}</strong>}
              secondary={condition.description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Conditions;
