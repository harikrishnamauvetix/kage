import { List, ListItem, ListItemIcon, Typography, Box, ListItemText } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SubServiceListItems = ({ servicelist }) => (
  <List>
    {servicelist?.map((item, index) => (
      typeof item === "object" && item.heading && item.description ? (
        <ListItem key={index} alignItems="flex-start">
          <ListItemIcon sx={{minWidth: "30px", color: "primary.main",padding: "0px !important"  }}>
          <ArrowForwardIosIcon />
          </ListItemIcon>
          <Box>
            <Typography variant="subtitle1">{item.heading}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </Box>
        </ListItem>
      ) : (
        <ListItem key={index} sx={{ padding: "0px !important" }}>
          <ListItemIcon sx={{ minWidth: "30px", color: "primary.main",padding: "0px !important" }}>
            <ArrowForwardIosIcon />
          </ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      )
    ))}
  </List>
);

export default SubServiceListItems;
