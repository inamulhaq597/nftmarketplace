import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
interface Props {
  headline: string;
  img: string;
  description: string;
}
const Teamcard = ({ headline, img, description }: Props) => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#141B22",
          paddingX: "70px",
          paddingY: "30px",
        }}
      >
        <Box sx={{ marginBottom: "20px" }}>
          <Image src={img} width={120} height={120} alt="Paella dish" />
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "24",
              fontWeight: "400",
              lineHeight: "30px",
              color: "secondary.main",
              marginBottom: "5px",
            }}
          >
            {headline}
          </Typography>
          <Typography
            sx={{
              fontSize: "18",
              fontWeight: "400",
              lineHeight: "28px",
              color: "info.main",
              marginBottom: "10px",
            }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex ",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            <Image src={"/linkdin.svg"} alt={""} width={20} height={20} />
            <Image src={"/facebook.png"} alt={""} width={20} height={20} />
            <Image src={"/Telegram.svg"} alt={""} width={20} height={20} />
            <Image src={"/twter.svg"} alt={""} width={20} height={20} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Teamcard;
