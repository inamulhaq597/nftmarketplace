import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Aboutcard from "@/component/aboutcard";
import Image from "next/image";

const About = () => {
  const cardData = [
    {
      headline: "hIGH QUAILITY",
      backHeadline: "01",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and Ipsum typesetting industry. ",
    },
    {
      headline: "BIG COLLECTION",
      backHeadline: "02",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and Ipsum typesetting industry. ",
    },
    {
      headline: "TOP RESOURCE",
      backHeadline: "03",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and Ipsum typesetting industry. ",
    },
    {
      headline: "BIG COMMUNITY",
      backHeadline: "04",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and Ipsum typesetting industry. ",
    },
  ];
  return (
    <>
      <Box sx={{ py: { xs: "30px", sm: "30px", md: "40px" } }}>
        <Container>
          <Box sx={{ marginBottom: "60px" }}>
            <Typography
              sx={{
                fontSize: { xs: "35px", sm: "35px", md: "44px" },

                fontWeight: "400",
                lineHeight: "56px",
                color: "secondary.main",
                display: "flex",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "15px", md: "18px" },
                fontWeight: "400",
                lineHeight: "28px",
                color: "third.main",
                textAlign: { xs: "justify", sm: "justify", md: "center" },
                display: "flex",
              }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat
              cupidatat non proident, sunt in culpa qui officia dese runt mollit
              anim id est laborum velit esse cillum dolore eu fugiat nulla
              pariatu epteur sint occaecat
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            columns={12}
            sx={{ marginBottom: "40px" }}
          >
            {cardData.map((v, i) => (
              <Grid item xs={12} md={6} lg={6} key={i}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Aboutcard
                    headline={v.headline}
                    backHeadline={v.backHeadline}
                    description={v.Description}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              sx={{
                width: "168px",
                height: "48px",
                fontSize: "16",
                fontWeight: "400",
                lineHeight: "24px",
                color: "#fff",
              }}
              variant="outlined"
            >
              READ MORE
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
