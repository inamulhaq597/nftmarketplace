import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
interface Props {
  headline: string;
  img: string;
  description: string;
}
const Cardwork = ({ headline, img, description }: Props) => {
  return (
    <>
      <Box
        sx={{
          background: "#141B22",
          padding: "15px",
          width: "330px",
          textAlign: "center",
        }}
      >
        <Image src={img} width={115} height={85} alt="Paella dish" />
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "30px",
            color: "primary.main",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          {headline}
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "32px",
            color: "secondary.main",
          }}
        >
          {description}
        </Typography>
      </Box>
    </>
  );
};

export default Cardwork;
