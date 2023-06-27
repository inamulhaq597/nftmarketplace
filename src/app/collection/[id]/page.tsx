"use client";

import ResponsiveAppBar from "@/app/navbar";
import { Slider } from "@/component/slider";
import Itemdetails from "@/component/sub_details/itemdetails";

import Nftdetails from "@/component/sub_details/nftdetails";
import { itemData } from "@/component/subpages/item";
import Subfooter from "@/component/subpages/subfooter";
import Subjoin from "@/component/subpages/subjoin";

import { Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const Index = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    console.log(id, "hello");
  }, [id]);

  const selectedItem = itemData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <>
      {/* page 3 */}
      <ResponsiveAppBar />
      <Itemdetails />
      <Nftdetails selectedItem={selectedItem} />
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

export default Index;
