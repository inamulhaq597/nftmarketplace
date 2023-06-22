import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  headline: string;
  backHeadline: string;
  description: string;
}

const Aboutcard = ({ headline, backHeadline, description }: Props) => {
  return (
    <>
      {/*  className="inner_wrap" */}

      <Box
        sx={{
          padding: { xs: "0", sm: "0", md: "20px" },
          // border: "1px solid red",
          backgroundColor: "#141B22",
        }}
      >
        {/* <span className="border_btm" /> */}

        <Box sx={{ padding: "38px" }}>
          <Box
            sx={{
              position: "relative",
              marginBottom: "70px",
            }}
          >
            <Typography
              sx={{
                fontSize: "80px",
                fontWeight: "400",
                lineHeight: "96px",
                color: "primary.main",
                textTransform: "capitalize,",
                opacity: "0.5",
                position: "absolute",
                left: "0px",
                top: "-30px",
                fontFamily: "Bakbak One",
              }}
            >
              {backHeadline}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "30px",
                color: "secondary.main",
                position: "absolute",
                left: "0px",
                top: "10px",
                textTransform: "capitalize,",
                fontFamily: "Bakbak One",
              }}
            >
              {headline}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28px",
                color: "info.main",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Aboutcard;
