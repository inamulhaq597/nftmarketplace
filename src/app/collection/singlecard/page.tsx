"use client";

import ResponsiveAppBar from "@/app/navbar";
import { Slider } from "@/component/slider";
import Itemdetails from "@/component/sub_details/itemdetails";

import Nftdetails from "@/component/sub_details/nftdetails";
import Subfooter from "@/component/subpages/subfooter";
import Subjoin from "@/component/subpages/subjoin";

import { Typography, Box } from "@mui/material";
import React from "react";

const SingleCard = () => {
  return (
    <>
      {/* page 3 */}
      <ResponsiveAppBar />
      <Itemdetails />
      <Nftdetails />
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "25px", md: "44px" },
            fontWeight: "400",
            lineHeight: "55px",
            color: "secondary.main",
            textAlign: "center",
          }}
        >
          EXPLORE COLECTIONS
        </Typography>
        <Slider />
      </Box>
      <Subjoin />
      <Subfooter />
    </>
  );
};

export default SingleCard;
