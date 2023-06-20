import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#040B11",
          backgroundImage: `url(${"/BG_Main.svg"})`,
          // height: "100vh",

          display: "flex",
          backgroundRepeat: "none",
          backgroundSize: "cover",
          alignItems: "center",
          height: { xs: "0", md: "100vh", lg: "92vh" },
          py: { xs: "115px", md: "40px", lg: "40px" },
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "25px", md: "35px", lg: "45px" },
                fontWeight: "400",
                color: "secondary.main",
                lineHeight: { xs: "35px", md: "35px", lg: "59px" },
                mb: "10px",
                textAlign: { xs: "center", sm: "center", md: "left" },
              }}
            >
              WITH&nbsp;
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
                <br />
              </Typography>
              EXPLORE
              <br /> NFT COLLECTION
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", md: "17px", lg: "17px" },
                fontWeight: "400",
                lineHeight: "28px",
                mb: "30px",

                textAlign: { xs: "center", sm: "center", md: "left" },
                color: "secondary.main",
              }}
            >
              We are the best way to check the rarity of NFT collection
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "col", sm: "col", md: "flex" },
              gap: { xs: "10px", sm: "10px", md: "75px" },
              marginBottom: "20px",
              justifyContent: { xs: "center", sm: "center", md: "left" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "42px" },
                  fontWeight: "400",
                  lineHeight: "56px",
                  color: "secondary.main",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                2240+
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "third.main",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                Total Iteam
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "42px" },
                  fontWeight: "400",
                  lineHeight: "56px",
                  color: "secondary.main",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                1000+
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "third.main",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                Profiles whitelisted
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "col", sm: "col", md: "flex" },
              gap: "20px",
              justifyContent: { xs: "center", sm: "center", md: "left" },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", sm: "center", md: "left" } }}>
              <Button
                sx={{
                  width: "168px",
                  height: "48px",
                  fontSize: "16",
                  fontWeight: "400",
                  lineHeight: "24px",
                  marginBottom: { xs: "20px", sm: "20px", md: "0" },
                }}
                variant="contained"
              >
                connect wallet
              </Button>
            </Box>
            <Box
              sx={{
                textAlign: { xs: "center", sm: "center", md: "left" },
                marginBottom: { xs: "80px", sm: "80px", md: "0" },
              }}
            >
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
                whitelist now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
