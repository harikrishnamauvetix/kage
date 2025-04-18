import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Link,
  Box,
  Button,
  Item,
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import React, { useState,useContext } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Faq({ faq }) {
    const [expanded, setExpanded] = useState(false);
  if (!faq) return null;
  const handleFaqToggle = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
// console.log(faq,"dddd")
  return (
    <Stack sx={{margin:"20px 0"}}>
      {faq?.heading && (
        <>
         <Typography
            variant="h6"
            sx={{  color: "secondary.main" }}
          >
            {faq?.heading }
          </Typography>
          <Grid container spacing={2}>
     
            {faq?.faq?.map((faq, faqIdx) => (
              <Grid size={{ xs: 12, sm: 12, md: 12 }} key={faqIdx}>
                <Accordion
                  expanded={expanded === faqIdx}
                  onChange={handleFaqToggle(faqIdx)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel-${faqIdx}-content`}
                    id={`panel-${faqIdx}-header`}
                  >
                    <ListItemText primary={faq.question} />
                  </AccordionSummary>
                  <AccordionDetails>
                    <ListItemText secondary={faq.answer} />
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Stack>
  );
}

export default Faq;
