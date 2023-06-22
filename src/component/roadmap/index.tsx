import Staps from "@/staps";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Road = () => {
  return (
    <>
      <Box id={"roadmap"}>
        <Container>
          <Box>
            <Typography
              sx={{
                color: "#FFF",

                fontSize: { xs: "30px", sm: "30px", md: "44px" },
                fontWeight: "400",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              ROAD MAP
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "6px",
              overflowX: "hidden",
              backgroundColor: "#11171D",
            }}
          >
            <Grid container columns={12} alignItems={"center"}>
              <Grid item xs={12} md={4} lg={4} padding={"12px"} width="100%">
                <img src={"IMG (3).svg"} alt={""} width="100%" />
              </Grid>
              <Grid item xs={12} padding={"10px"} md={2}>
                <Box>
                  <Box sx={{ marginBottom: "10px" }}>
                    <img src={"IMG 6.svg"} alt={""} width="100%" />
                  </Box>
                  <Box>
                    <img src={"IMG (4).svg"} alt={""} width="100%" />
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{ padding: { xs: "20px", sm: "20px", md: "0" } }}
              >
                <Box
                  sx={{
                    paddingX: { xs: "0", sm: "0", md: "40px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "30px", sm: "30px", md: "36px" },
                      fontWeight: "400",
                      color: "white",
                      marginBottom: "20px",
                    }}
                  >
                    PHASE 1
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <Image
                      src={"roadlogo.svg"}
                      alt={""}
                      width={24}
                      height={27}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "15px", md: "18px" },
                        fontWeight: "400",
                        color: "#C2C3C5",
                      }}
                    >
                      Befriending & Chat Functions
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <Image
                      src={"roadlogo.svg"}
                      alt={""}
                      width={24}
                      height={27}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "15px", md: "18px" },
                        fontWeight: "400",
                        color: "#C2C3C5",
                      }}
                    >
                      Challenging Feature
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <Image
                      src={"roadlogo.svg"}
                      alt={""}
                      width={24}
                      height={27}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "15px", md: "18px" },
                        fontWeight: "400",
                        color: "#C2C3C5",
                      }}
                    >
                      Corsair Wheel
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      columnGap: "12px",
                      marginBottom: "15px",
                    }}
                  >
                    <Image
                      src={"roadlogo.svg"}
                      alt={""}
                      width={24}
                      height={27}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "15px", sm: "15px", md: "18px" },
                        fontWeight: "400",
                        color: "#C2C3C5",
                      }}
                    >
                      Mobile Version Launch
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* <Staps /> */}
        </Container>
      </Box>
    </>
  );
};

export default Road;
