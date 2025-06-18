import { Typography, Box, List, ListItem } from "@mui/material";

const BlogContent = ({ content }) => {
  return (
    <Box>
      {content.map((section, index) => (
        <Box key={index} mb={4}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "primary.main",
              margin: "10px 0",
            }}
          >
            {section.heading}
          </Typography>
          
          {section.paragraph && <Typography>{section?.paragraph}</Typography>}

          {section.points && (
            <List>
              {section.points.map((point, idx) => (
                <ListItem key={idx}>
                  {typeof point === "string" ? (
                    // If it's just a string (tips)
                    <>{point}</>
                  ) : (
                    // If it's an object with subheading and value
                    <>
                      <strong>{point.subheading}:</strong>&nbsp;{point.value}
                    </>
                  )}
                </ListItem>
              ))}
            </List>
          )}
          {section.paragraph2 && <Typography>{section?.paragraph2}</Typography>}

          {section.paragraph3 && <Typography>{section?.paragraph3}</Typography>}
          {section.paragraph4 && <Typography>{section?.paragraph4}</Typography>}
        </Box>
      ))}
    </Box>
  );
};

export default BlogContent;
