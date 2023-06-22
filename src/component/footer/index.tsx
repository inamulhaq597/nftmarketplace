import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box sx={{ py: "20px", borderTop: "1px solid #565657" }}>
        <Container>
          <Box
            sx={{
              display: { xs: "col", sm: "col", md: "flex" },
              justifyContent: "space-between",
              color: "#fff",
              textAlign: { xs: "center", sm: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                display: { xs: "col", sm: "col", md: "flex" },
                alignItems: "center",
                marginBottom: { xs: "5px", sm: "5px", md: "0px" },
                columnGap: "40px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "400",
                  lineHeight: { xs: "15px", sm: "15px", md: "30px" },
                  marginBottom: { xs: "30px", sm: "30px", md: "0px" },
                }}
              >
                NIFTYPLACE
              </Typography>

              <Typography
                sx={{
                  color: "#C2C3C5",
                  fontSize: { xs: "12px", sm: "12px", md: "14px" },
                  fontWeight: "400",

                  lineHeight: { xs: "15px", sm: "15px", md: "22px" },
                }}
              >
                NIFTYPLACE 2022 - ALL rights reserved
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "column", sm: "column", md: "flex" },

                columnGap: "40px",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "center", md: "left" },
              }}
            >
              <a href="#hero" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#C2C3C5",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: { xs: "30px", sm: "30px", md: "22px" },
                  }}
                >
                  Home
                </Typography>
              </a>
              <a href="#about" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#C2C3C5",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: { xs: "30px", sm: "30px", md: "22px" },
                }}
              >
                About
                </Typography>
              </a>
              <a href="#roadmap" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#C2C3C5",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: { xs: "30px", sm: "30px", md: "22px" },
                }}
              >
                Roadmap
              </Typography>
              </a>
              <a href="#team" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#C2C3C5",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: { xs: "30px", sm: "30px", md: "22px" },
                }}
              >
                Our Team
                </Typography>
              </a>
              <a href="#faq" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#C2C3C5",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: { xs: "30px", sm: "30px", md: "22px" },
                }}
              >
                FAQs
                </Typography>
                </a>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
