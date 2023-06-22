import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Partnercard from "../partnercard";

const Partner = () => {
  const partnerData = [
    {
      color: "",
      img: "/patrenpix1.svg",
    },
    {
      color: "#141B22",
      img: "/patrenpix2.svg",
    },
    {
      color: "",
      img: "/patrenpix3.svg",
    },
    {
      color: "#141B22",
      img: "/patrenpix4.svg",
    },
    {
      color: "",
      img: "/patrenpix5.svg",
    },
    {
      color: "#141B22",
      img: "/patrenpix6.svg",
    },
    {
      color: "#141B22",
      img: "/patranpix7.svg",
    },
    {
      color: "",
      img: "/patranpix8.svg",
    },
    {
      color: "#141B22",
      img: "/patranpix9.svg",
    },
    {
      color: "",
      img: "/patranpix10.svg",
    },

    {
      color: "#141B22",
      img: "/patranpix11.svg",
    },
    {
      color: "",
      img: "/patranpix12.svg",
    },
    {
      color: "",
      img: "/patranpix13.svg",
    },
    {
      color: "#141B22",
      img: "/patranpix14.svg",
    },
    {
      color: "",
      img: "/patranpix15.svg",
    },
    {
      color: "#141B22",
      img: "/patranpix16.svg",
    },
    {
      color: "",
      img: "/patranpix17.svg",
    },
    {
      color: "#141B22",
      img: "/patranpix18.svg",
    },
  ];
  return (
    <>
      <Box
        sx={{
          py: { xs: "10px", sm: "10px", md: "40px" },
        }}
      >
        <Container>
          <Box
            sx={{
              marginBottom: "30px",
              paddingY: { xs: "0px", md: "35px", lg: "40px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "25px", md: "35px", lg: "45px" },
                fontWeight: "400",
                color: "secondary.main",
                lineHeight: { xs: "45px", md: "35px", lg: "59px" },
                mb: "10px",
                textAlign: { xs: "center", sm: "center", md: "center" },
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  fontSize: { xs: "25px", md: "35px", lg: "45px" },

                  fontWeight: "600",
                  lineHeight: { xs: "30px", md: "50px", lg: "59px" },
                  marginBottom: "20px",
                  color: "primary.main",
                }}
              >
                NIFTYPLACE
              </Typography>
              &nbsp; PARTNER
            </Typography>
          </Box>

          {/* <Partnercard /> */}
          <Grid
            container
            spacing={4}
            columns={12}
            sx={{
              marginBottom: "40px",

              display: ["block", "", "none"],
            }}
          >
            {partnerData.map((v, i) => (
              <Grid  key={i}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Partnercard img={v.img} color={v.color} />
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box>
            <Grid
              container
              spacing={4}
              sx={{
                marginBottom: "40px",

                justifyContent: "center",
              }}
            >
              {partnerData.map((v, i) => (
                <Grid item key={i}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Partnercard img={v.img} color={v.color} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Partner;
