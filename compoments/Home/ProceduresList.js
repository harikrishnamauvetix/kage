import React from "react";
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
const ProceduresList = (props) => {
  return (
    <>
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },
          backgroundColor: "background.default",
          color: "black",
        }}
      >
        <Container>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
                color: "secondary.main",
                textAlign: "left",
              }}
            >
              Advanced Procedures
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {props?.advancedprocedures?.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Stack
                  direction="column"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={(theme) => ({
                    padding: "10px",
                    height: "100%",
                  })}
                >
                  <Box sx={{ color: "primary.main" }}>
                    <Icon
                      sx={{
                        fontSize: "60px",
                        color: "#1976d2",
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt="Doctor Profile"
                        width={60}
                        height={60}
                      />
                    </Icon>
                  </Box>
                  <Box sx={{ px: 1 }}>
                    <Link
                      href={`/advanced-procedures/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Typography
                        gutterBottom
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          marginBottom: "10px",
                          color: "primary.main",
                          height: "60px", // Fixed height for consistency
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2, // Limit to 2 lines
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>

                    {item.sections?.[0]?.content &&
                    Array.isArray(item.sections[0].content) ? (
                      <Typography
                        key={0}
                        variant="body1"
                        sx={{ color: "#000", marginBottom: "10px" }}
                      >
                        {item.sections[0].content[0].length > 100
                          ? `${item.sections[0].content[0].slice(0, 100)}...`
                          : item.sections[0].content[0]}
                      </Typography>
                    ) : (
                      <Typography
                        variant="body1"
                        sx={{ color: "#000", marginBottom: "10px" }}
                      >
                        {item.sections?.[0]?.content}
                      </Typography>
                    )}

                    <Link
                      href={`/advanced-procedures/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      passHref
                    >
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "secondary.main",
                          margin: "10px 0",
                        }}
                      >
                        Read more
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProceduresList;
