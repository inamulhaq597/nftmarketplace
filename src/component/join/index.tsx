import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { TextFields } from "@material-ui/icons";
import { Input, TextField } from "@material-ui/core";
import Image from "next/image";
const Join = () => {
  return (
    <>
      <Box sx={{ py: { xs: "30px", sm: "30px", md: "40px" } }}>
        <Container>
          <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "24px", md: "44px" },
                fontWeight: "400",
                lineHeight: "56px",
                color: "secondary.main",
                marginBottom: "6px",
              }}
            >
              JOIN OUR COMMUNITY
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
                lineHeight: "28px",
                color: "info.main",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginBottom: "30px",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#5865F2",
                color: "#fff",
                width: "147px",
                height: "48px",
                fontSize: "16",
                fontWeight: "400",
                lineHeight: "24px",
              }}
              variant="contained"
            >
              Discord
            </Button>
            <Button
              sx={{
                width: "168px",
                height: "48px",
                fontSize: "20",
                fontWeight: "400",
                lineHeight: "24px",
              }}
              variant="contained"
            >
              whitelist now
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "col", sm: "col", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#141B22",

                borderRadius: "2px",
                paddingX: "50px",
                paddingY: "8px",
                marginBottom: "20px",
              }}
            >
              <TextField
                placeholder="Enter Email"
                InputProps={{
                  style: {
                    color: "#C2C3C5",
                    border: "none",
                  },
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                sx={{
                  width: "168px",
                  height: "48px",
                  fontSize: "16",
                  fontWeight: "400",
                  lineHeight: "24px",

                  marginTop: { xs: "0", sm: "0", md: "-20px" },
                }}
                variant="contained"
              >
                SUBSCRIBE
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <Image src={"/Facebook.png"} alt={""} width={22} height={22} />
            <Image src={"/Telegram.svg"} alt={""} width={22} height={22} />
            <Image src={"/twter.svg"} alt={""} width={22} height={22} />
            <Image src={"/linkdin.svg"} alt={""} width={22} height={22} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Join;
