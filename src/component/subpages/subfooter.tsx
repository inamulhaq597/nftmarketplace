import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const Subfooter = () => {
  return (
    <Box
      sx={{ paddingX: "30px", paddingY: "30px", backgroundColor: "#141B22" }}
    >
      <Container>
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "400",
                  lineHeight: "42px",
                  color: "primary.main",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                NIFTYPLACE
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "secondary.main",
                  fontFamily: "Poppins",
                  textAlign: { xs: "center", sm: "center", md: "left" },
                }}
              >
                We are the best way to check the rarity of NFT collection.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left", lg: "left" },
                padding: "6px",
              }}
            >
              <Box sx={{ textAlign: { xs: "center", md: "left", lg: "left" } }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",

                    lineHeight: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  SUBSCRIBE
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",

                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                      marginBottom: "15px",
                    }}
                  >
                    Home
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    About
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Roadmap
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Our Team
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    FAQs
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2} lg={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "left", lg: "left" },
                padding: "6px",
                textAlign: { xs: "center", md: "left", lg: "left" },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",

                    lineHeight: "24px",
                    color: "#fff",
                    marginBottom: "10px",
                  }}
                >
                  COMPANY
                </Typography>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",

                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                      marginBottom: "15px",
                    }}
                  >
                    Terms Canditions
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Whitepaper
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: "15px",
                      lineHeight: "22px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Help Center
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "20px", md: "16px", lg: "16px" },
                  fontWeight: "400",
                  textAlign: { xs: "center", md: "left", lg: "left" },
                  lineHeight: "24px",
                  color: "#fff",
                  marginBottom: "10px",
                }}
              >
                SUBSCRIBE
              </Typography>

              <Box
                sx={{
                  display: { xs: "col", md: "flex", lg: "flex" },
                  marginBottom: { xs: "20px", md: "0", lg: "0" },
                  textAlign: "center",
                }}
              >
                <TextField
                  fullWidth
                  label="Enter your email"
                  id="fullWidth"
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "52px",
                      padding: "0px 5px 0px 10px",
                      color: "#C2C3C5",
                      backgroundColor: "#2E343A",
                      marginBottom: { xs: "20px", md: "0", lg: "0" },
                    },
                  }}
                />
                <Button
                  sx={{
                    fontSize: { xs: "10", md: "16px", lg: "16px" },
                    fontWeight: "400",
                    lineHeight: "24px",

                    paddingX: { xs: "30", md: "50", lg: "50px" },
                  }}
                  variant="contained"
                >
                  SUBSCRIBE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: "1px solid #434343",
            display: { xs: "col", md: "flex", lg: "flex" },
            justifyContent: "space-between",

            paddingY: "10px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Poppins",
                color: "info.main",
                textAlign: "center",
                marginBottom: { xs: "20px", md: "0", lg: "0" },
              }}
            >
              NIFTYPLACE 2022 - ALL rights reserved
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <Image src={"/Facebook.png"} alt={""} width={22} height={22} />
            <Image src={"/Telegram.svg"} alt={""} width={22} height={22} />
            <Image src={"/twter.svg"} alt={""} width={22} height={22} />
            <Image src={"/linkdin.svg"} alt={""} width={22} height={22} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Subfooter;
