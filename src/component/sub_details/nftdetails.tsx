import React from "react";
import { Typography, Box, Container, Grid, Button } from "@mui/material";

const Nftdetails = ({ selectedItem }: any) => {
  return (
    <>
      <Box sx={{ marginBottom: "80px" }}>
        <Container>
         
          <Grid alignContent={"center"} spacing={10} container columns={12}>
            <Grid item xs={12} md={6} lg={6}>
              <img
                src={selectedItem.img}
                alt={""}
                width={"100%"}
                height={"100%"}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Box
                sx={{
                  paddingY: "30px",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "44px",
                      lineHeight: "56px",
                      color: "secondary.main",
                      marginBottom: "20px",
                    }}
                  >
                    SKISIRS#4587
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "20px",
                      lineHeight: "30px",
                      color: "info.main",
                      fontFamily: "Poppins",
                      textAlign: "justify",
                      marginBottom: "20px",
                    }}
                  >
                    As the first hero of the Neoh Universe, collection has over
                    <br />
                    9,999 unique skins drawn from the different missions and
                    <br />
                    challenges he faced throughout his life.
                  </Typography>
                </Box>
                {/* box 1*/}
                <Grid
                  marginBottom={"20px"}
                  container
                  justifyContent={"center"}
                  columns={6.2}
                  gap="10px"
                >
                  <Grid xs={3} md={2} lg={2}>
                    <Box
                      sx={{
                        backgroundColor: "#141B22",

                        padding: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "info.main",
                        }}
                      >
                        Clothing
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "secondary.main",
                        }}
                      >
                        SNAKE
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={3} md={2} lg={2}>
                    <Box
                      sx={{
                        backgroundColor: "#141B22",

                        padding: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "info.main",
                        }}
                      >
                        Eyes
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "secondary.main",
                        }}
                      >
                        MIX
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={3} md={2} lg={2}>
                    <Box
                      sx={{
                        backgroundColor: "#141B22",

                        padding: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "info.main",
                        }}
                      >
                        Eyes
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "secondary.main",
                        }}
                      >
                        MIX
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                {/* box2 */}
                <Grid
                  container
                  columns={6.2}
                  justifyContent={"center"}
                  gap="10px"
                >
                  <Grid xs={3} md={2} lg={2}>
                    <Box
                      sx={{
                        backgroundColor: "#141B22",

                        padding: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "info.main",
                        }}
                      >
                        Clothing
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "secondary.main",
                        }}
                      >
                        SNAKE
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={3} md={2} lg={2}>
                    <Box
                      sx={{
                        backgroundColor: "#141B22",

                        padding: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "info.main",
                        }}
                      >
                        Eyes
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "secondary.main",
                        }}
                      >
                        MIX
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={3} md={2} lg={2}>
                    <Box
                      sx={{
                        backgroundColor: "#141B22",

                        padding: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "26px",
                          color: "info.main",
                        }}
                      >
                        Eyes
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "24px",
                          lineHeight: "30px",
                          color: "secondary.main",
                        }}
                      >
                        MIX
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                {/* price section */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "25px", md: "36px", lg: "36px" },
                      fontWeight: "400",
                      color: "secondary.main",
                      lineHeight: { xs: "45px", md: "35px", lg: "59px" },
                      mb: "10px",
                      textAlign: { xs: "center", sm: "center", md: "left" },
                    }}
                  >
                    PRICE:&nbsp;
                    <Typography
                      component={"span"}
                      sx={{
                        fontSize: { xs: "25px", md: "36px", lg: "36px" },

                        fontWeight: "600",
                        lineHeight: { xs: "40px", md: "50px", lg: "59px" },
                        mb: "20px",
                        color: "primary.main",
                      }}
                    >
                      0.15 ETH
                      <br />
                    </Typography>
                  </Typography>
                </Box>

                {/* Button */}
                <Box
                  sx={{
                    textAlign: { xs: "center", sm: "center", md: "left" },
                    marginBottom: "30px",
                  }}
                >
                  <Button
                    sx={{
                      width: "100%",
                      height: "48px",
                      fontSize: "16",
                      fontWeight: "400",
                      lineHeight: "24px",
                      marginBottom: { xs: "20px", sm: "20px", md: "0" },
                    }}
                    variant="contained"
                  >
                    BUY ON OPENSEA
                  </Button>
                </Box>

                {/* 2 btn */}
                <Grid container columns={6} spacing={2}>
                  <Grid item xs={6} md={3} lg={3}>
                    <Button
                      sx={{
                        width: "100%",
                        height: "55px",
                        fontSize: "16",
                        fontWeight: "400",
                        lineHeight: "24px",
                        color: "#fff",
                        borderColor: "info.main",
                      }}
                      variant="outlined"
                    >
                      JOIN discord
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={3} lg={3}>
                    <Button
                      sx={{
                        width: "100%",
                        height: "55px",
                        fontSize: "16",
                        fontWeight: "400",
                        lineHeight: "24px",
                        color: "#fff",
                        borderColor: "info.main",
                      }}
                      variant="outlined"
                    >
                      JOIN twitter
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Nftdetails;
