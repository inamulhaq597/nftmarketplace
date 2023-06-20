import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Cardwork from "@/component/cardwork";
const workData = [
  {
    headline: "STEP 1",
    img: "/workpix1.svg",
    description: "Connect Your Wallet",
  },
  {
    headline: "STEP 2",
    img: "/workpix2.svg",
    description: "Sellect Your Quaility",
  },
  {
    headline: "STEP 3",
    img: "/workpix3.svg",
    description: "Confiem the Transaction",
  },
  {
    headline: "STEP 4",
    img: "/workpix4.svg",
    description: "receive Your NFTs",
  },
];
const Work = () => {
  return (
    <>
      <Box sx={{ py: { xs: "30px", sm: "30px", md: "40px" } }}>
        <Container>
          <Box sx={{ py: "40px" }}>
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
              HOW TO&nbsp;
              <Typography
                component={"span"}
                sx={{
                  fontSize: { xs: "25px", md: "35px", lg: "45px" },

                  fontWeight: "600",
                  lineHeight: { xs: "40px", md: "50px", lg: "59px" },
                  mb: "20px",
                  color: "primary.main",
                }}
              >
                NIFTYPLACE
              </Typography>
              &nbsp; WORK
            </Typography>
          </Box>

          {/* <Cardwork /> */}
          <Grid
            container
            spacing={3}
            columns={12}
            sx={{ marginBottom: "40px" }}
          >
            {workData.map((v, i) => (
              <Grid item xs={12} md={4} lg={3} key={i}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Cardwork
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

export default Work;
