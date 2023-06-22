import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Teamcard from "../teamcard";

const TeamData = [
  {
    headline: "Ralph Edwards",
    img: "/teampix1.png",
    description: "Founder",
  },
  {
    headline: "Jason Smith",
    img: "/teampix2.png",
    description: "Co - Founder",
  },
  {
    headline: "Tony Wings",
    img: "/teampix3.png",
    description: "Web Designer",
  },
  {
    headline: "Esther Howard",
    img: "/teampix4.png",
    description: "Project Manager",
  },
  {
    headline: "Jenny Wilson",
    img: "/teampix5.png",
    description: "Artist",
  },
  {
    headline: "Robert Fox",
    img: "/teampix6.png",
    description: "UI/UX Designer",
  },
  {
    headline: "Devon Lane",
    img: "/teampix7.png",
    description: "Ux Architect",
  },
];
const Team = () => {
  return (
    <>
      <Box id={"team"} sx={{ py: { xs: "10px", sm: "10px", md: "40px" } }}>
        <Container>
          <Box sx={{ marginBottom: "30px", py: "40px" }}>
            <Typography
              sx={{
                fontSize: { xs: "30px", md: "35px", lg: "45px" },
                fontWeight: "400",
                color: "secondary.main",
                lineHeight: { xs: "25px", md: "35px", lg: "59px" },
                marginBottom: { xs: "0", sm: "0", md: "10px" },
                textAlign: { xs: "center", sm: "center", md: "center" },
              }}
            >
              OUR TEAM
            </Typography>
          </Box>

          {/* <Cardwork /> */}
          <Grid
            container
            spacing={3}
            columns={12}
            sx={{ marginBottom: "40px", justifyContent: "center" }}
          >
            {TeamData.map((v, i) => (
              <Grid item xs={12} md={4} lg={3} key={i}>
                <Box>
                  <Teamcard
                    img={v.img}
                    headline={v.headline}
                    description={v.description}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Team;
