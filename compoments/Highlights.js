import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import {
  Container,
  Grid2,
  CardMedia,
  CardContent,
  Avatar,
  Rating,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "POEM (Peroral Endoscopic Myotomy)",
    description:
      "Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "EMR (Endoscopic Mucosal Resection)",
    description:
      "Experience unmatched durability that goes above and beyond with lasting investment.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "ESD (Endoscopic Submucosal Dissection)",
    description:
      "Integrate our product into your routine with an intuitive and easy-to-use interface.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "STER (Submucosal Tunneling Endoscopic Resection)",
    description:
      "Stay ahead with features that set new standards, addressing your evolving needs better than the rest.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "ARMA (Anti-reflux mucosal ablation)",
    description:
      "Count on our responsive customer support, offering assistance that goes beyond the purchase.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "GERDx (Anti-Reflux Mucosal Ablation Therapy)",
    description:
      "Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.",
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "FTRD (Full-Thickness Resection Device)",
    description:
      "Utilize groundbreaking tools and techniques for effective and reliable results.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "EUS- Biliary Drainage",
    description:
      "Harness advanced tools to ensure seamless and precise procedures.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "EUS- GJ (Gastrojejunostomy)",
    description:
      "Integrate solutions that enable efficient and smooth operations.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "EUS- RF Ablation",
    description:
      "Stay at the forefront of medical advancements with novel procedures.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "EUS Cystogastrostomy",
    description:
      "Rely on state-of-the-art tools to support your treatment protocols.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: "Endoscopic Necrosectomy",
    description:
      "Leverage innovative approaches to achieve optimal patient outcomes.",
  },
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
    description:
      "Explore our technology for precise and effective diagnostic capabilities.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Bariatric Endoscopy (ESG - Endoscopic Sleeve Gastroplasty)",
    description:
      "Empower your practice with advanced methods for better patient care.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Biofeedback",
    description:
      "Our solutions are designed to enhance treatment experiences and outcomes.",
  },
];
const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    location: "Chicago, IL",
    text: "The Infinite Social kickstarted the next stage of my life. I used to be too afraid to start conversations with new people, .",
    avatar: "https://via.placeholder.com/150",
    rating:"4"
  },
  {
    id: 2,
    name: "John Smith",
    location: "New York, NY",
    text: "Joining The Infinite Social transformed my ability to network and connect with others. It gave me the tools and confidence ",
    avatar: "https://via.placeholder.com/150",
     rating:"4"
  },
  {
    id: 3,
    name: "Ally Brown",
    location: "Los Angeles, CA",
    text: "Thanks to The Infinite Social, I’ve expanded my social circle and gained skills I didn’t know I needed. The community is ",
    avatar: "https://via.placeholder.com/150",
     rating:"4"
  },
];

export default function Highlights() {
  return (
    <>
      <Box
        id="highlights"
        sx={{
          pt: { xs: 4, sm: 4 },
          pb: { xs: 8, sm: 4 },
          color: "black",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: { xs: 3, sm: 6 },
          }}
        >
          <Box
            sx={{
              width: { sm: "100%", md: "60%" },
              textAlign: { sm: "left", md: "center" },
            }}
          >
            <Typography component="h2" variant="h4" color="secondary.main">
              Procedures
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {items.slice(0, 6).map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Stack
                  direction="column"
                  component={Card}
                  spacing={1}
                  useFlexGap
                  sx={(theme) => ({
                    color: "#fff",
                    p: 3,
                    height: "100%",
                    borderColor: "hsla(220, 25%, 25%, 0.3)",
                    backgroundColor: "background.default",
                  })}
                >
                  <Box sx={{ opacity: "50%", color: "primary.main" }}>
                    {item.icon}
                  </Box>
                  <div>
                    <Typography
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "primary.main" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black" }}>
                      {item.description}
                    </Typography>
                  </div>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Stack sx={{ backgroundColor: "background.default", py: 5, px: 3 }}>
        <Container>
          {/* Equipments Section */}
          <Box sx={{ mb: 6 }}>
            <Typography
              component="h2"
              variant="h4"
              gutterBottom
              color="secondary"
              textAlign="left"
            >
              Our Equipments
            </Typography>

            <Grid2 container spacing={4}>
              {/* Sample Equipment 1 */}
              <Grid2 item xs={12} sm={6} md={4} xl={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Equipment Image"
                    height="200"
                    image="https://picsum.photos/seed/picsum/500/400" // replace with real image URL
                  />
                  <CardContent>
                    <Typography variant="h6">Equipment 1</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              {/* Sample Equipment 2 */}
              <Grid2 item xs={12} sm={6} md={4} xl={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Equipment Image"
                    height="200"
                    image="https://picsum.photos/seed/picsum/500/400" // replace with real image URL
                  />
                  <CardContent>
                    <Typography variant="h6">Equipment 2</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4} xl={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Equipment Image"
                    height="200"
                    image="https://picsum.photos/seed/picsum/500/400" // replace with real image URL
                  />
                  <CardContent>
                    <Typography variant="h6">Equipment 2</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
              <Grid2 item xs={12} sm={6} md={4} xl={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt="Equipment Image"
                    height="200"
                    image="https://picsum.photos/seed/picsum/500/400" // replace with real image URL
                  />
                  <CardContent>
                    <Typography variant="h6">Equipment 2</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description
                    </Typography>
                  </CardContent>
                </Card>
              </Grid2>
            </Grid2>
          </Box>
        </Container>
      </Stack>
      <Container>
        {/* Patient Testimonials Section */}
        <Box sx={{ mb: 6 }}>
          <Box>
            <Typography
              component="h2"
              variant="h4"
              gutterBottom
              color="secondary"
              textAlign="left"
              sx={{ mb: 3, mt: 3 }}
            >
              Patient Testimonials
            </Typography>
          </Box>
          <Box>
            {/* Title Section */}

            {/* Testimonial Cards */}
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "0 auto",
                      boxShadow: 3,
                      borderRadius: 2,
                      p: 0,
                    }}
                  >
                    <CardContent
                      sx={{
                        maxWidth: 345,
                        padding: "0px !important",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mb: 1, lineHeight: 1.6, p: 1 }}
                      >
                        {testimonial.text}
                      </Typography>
                      <Rating
                        value={testimonial.rating}
                        precision={0.5}
                        readOnly
                        sx={{
                          p: 1,
                         color:"primary.main"
                        }}
                      />

                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          lineHeight: 1.6,
                          p: 1,
                          backgroundColor: "secondary.main",
                          color: "#fff",
                        }}
                      >
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          sx={{
                            width: 56,
                            height: 56,
                            border: "2px solid #ff5722",
                            mr: 2,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 600, color: "#fff" }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography variant="caption" color="textSecondary">
                            {testimonial.title}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
        </Container>
        <Stack sx={{ backgroundColor: "background.default", py: 5, px: 3 }}>
        <Container>
          {/* Equipments Section */}
          <Box sx={{ mb: 6 }}>
            <Typography
              component="h2"
              variant="h4"
              gutterBottom
              color="secondary"
              textAlign="left"
            >
              Doctor Videos
            </Typography>
        {/* Doctor Videos Section */}
        <Box>
       
          <Grid2 container spacing={4}>
            {/* Sample Doctor Video 1 */}
            <Grid2 item xs={12} sm={6} md={4} xl={4}>
              <Card>
                <CardMedia
                  component="iframe"
                  alt="Doctor Video"
                  height="200"
                  src="https://www.youtube.com/embed/video_id" // replace with real video URL
                  title="Doctor's Video"
                />
                <CardContent>
                  <Typography variant="h6">Doctor 1</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A brief description of the video or doctor.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            {/* Sample Doctor Video 2 */}
            <Grid2 item xs={12} sm={6} md={4} xl={4}>
              <Card>
                <CardMedia
                  component="iframe"
                  alt="Doctor Video"
                  height="200"
                  src="https://www.youtube.com/embed/video_id" // replace with real video URL
                  title="Doctor's Video"
                />
                <CardContent>
                  <Typography variant="h6">Doctor 2</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A brief description of the video or doctor.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={4} xl={4}>
              <Card>
                <CardMedia
                  component="iframe"
                  alt="Doctor Video"
                  height="200"
                  src="https://www.youtube.com/embed/video_id" // replace with real video URL
                  title="Doctor's Video"
                />
                <CardContent>
                  <Typography variant="h6">Doctor 2</Typography>
                  <Typography variant="body2" color="text.secondary">
                    A brief description of the video or doctor.
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>

            {/* Add more Doctor videos as needed */}
          </Grid2>
        </Box>
        </Box>
        </Container>
        </Stack>
  
    </>
  );
}
