import { Gradient } from "@material-ui/icons";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Subjoin = () => {
  return (
    <Box
      sx={{
        py: { xs: "30px", sm: "30px", md: "40px" },
        paddingX: { xs: "5px", sm: "5px", md: "30px" },
      }}
    >
      <Container
        sx={{
          padding: "55px",
          background: "linear-Gradient(to right, #0ABE66,  #2333DE)",
          borderRadius: "8px",
        }}
      >
        <Box
          sx={{
            // position: "absolute",
            // left: "2%",
            // right: "85.76%",
            // top: "210%",
            // bottom: "-35.07%",
            // filter: "blur(5px)",
            // transform: "rotate(-9.56deg)",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          {/* <Image src={"/Vector.svg"} alt={""} width={321} height={321} /> */}
        </Box>
        <Box
          sx={{
            // position: "absolute",
            // left: "74.76%",
            // right: "2.46%",
            // top: "210%",
            // bottom: "-35.07%",
            // filter: "blur(5px)",
            // transform: "rotate(-9.56deg)",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          {/* <Image src={"/Vector.svg"} alt={""} width={321} height={321} /> */}
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            position: "relative",
          }}
        >
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
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              color: "#F7F7F9",
              fontFamily: "'Poppins",
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

              paddingX: "40px",
              paddingY: "10px",
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
              paddingX: "40px",
              fontSize: "20",
              fontWeight: "400",
              lineHeight: "24px",
            }}
            variant="contained"
          >
            whitelist now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subjoin;
