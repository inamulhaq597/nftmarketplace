import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Image from "next/image";
interface Props {
  img: string;
  color: string;
}
const Partnercard = ({ img, color }: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          background: color,

          padding: "7px",
        }}
      >
        <Image src={img} width={160} height={60} alt="Paella dish" />
      </Box>
    </>
  );
};

export default Partnercard;
