import React, { useState, useContext } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  Icon,
  CardMedia,
  Button,
  Stack,
  Rating,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "../slugify";
const BlogsList = (props) => {
  console.log(props);
  return (
    <>
      <Box
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },

          color: "black",
        }}
      >
        <Container>
          {/* <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
                textAlign: "left",
              }}
            >
              Blogs
            </Typography>
          </Box> */}
          <Grid container spacing={2} justifyContent="center">
            {props?.blogs?.map((item, index) => (
              <Grid item xs={12} sm={12} md={12} lg={8} xl={8} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    },
                    padding: 2,
                  }}
                >
                  {/* Image Side */}
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: "100%", sm: "40%" },
                      height: 200,
                      flexShrink: 0,
                      borderRadius: "8px",
                      overflow: "hidden",
                 
                    }}
                  >
                    <Image
                      src={item?.blogImage}
                      alt="Best Gastro Hospital In Hyderabad"
                      fill
                      style={{ objectFit: "cover" }}
                      quality={100}
                    />
                  </Box>

                  {/* Content Side */}
                  <CardContent
                    sx={{
                      flex: 2,
                      paddingLeft: { sm: 3 },
                      paddingTop: { xs: 2, sm: 0 },
                      marginLeft:"10px"
                    }}
                  >
                    <Link href={`/blogs/${generateSlug(item.title)}`} passHref>
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                          color: "primary.main",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>

                    {item.content && item.content[0] && (
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ textAlign: "justify" }}
                      >
                        {item.content[0].paragraph.length > 100
                          ? `${item.content[0].paragraph.slice(0, 100)}...`
                          : item.content[0].paragraph}
                      </Typography>
                    )}

                    <Button
                      component={Link}
                      href={`/blogs/${generateSlug(item.title)}`}
                      variant="contained"
                      sx={{
                        backgroundColor: "secondary.main",
                        marginTop: "15px",
                      }}
                    >
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BlogsList;
