import Cardwork from "@/component/cardwork";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
const sliderData = [
  {
    headline: "SKELATON #01",
    img: "/IMG (1).svg",
  },
  {
    headline: "MEECAT #02",
    img: "/IMG (2).svg",
  },
  {
    headline: "SPOTIOR #03",
    img: "/IMG (3).svg",
  },
  {
    headline: "SKISIRS#2",
    img: "/IMG (4).svg",
  },
  {
    headline: "SKISIRS#2",
    img: "/IMG (5).svg",
  },
  {
    headline: "SKISIRS#2",
    img: "/IMG (4).svg",
  },
];
export const Slider = () => {
  return (
    <Box sx={{ marginTop: "20px", py: { xs: "30px", sm: "30px", md: "40px" } }}>
      <Marquee>
        {sliderData.map((v, i) => (
          <Box
            key="i"
            sx={{
              padding: " 15px",
            }}
          >
            <Box sx={{ backgroundColor: "#141B22", padding: "15px" }}>
              <Box>
                <Image src={v.img} alt={""} width={280} height={280} />
              </Box>
              <Typography
                sx={{
                  color: "secondary.main",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  marginTop: "8px",
                }}
              >
                {" "}
                {v.headline}
              </Typography>
            </Box>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};
