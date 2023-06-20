"use client";
import Navbar from "./navbar";
import Hero from "./heroSection";
import ToggleColorMode from "./darkmode";
import About from "./about";

import { Typography } from "@mui/material";
import { Slider } from "@/component/slider";
import Work from "@/component/work";
import Road from "@/component/roadmap";
import Team from "@/component/team";
import Join from "@/component/join";
import Faq from "@/component/faq";
import Footer from "@/component/footer";
import Partnercard from "@/component/partnercard";
import Partner from "@/component/partner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Work />
      <Road />
      <Team />
      <Partner />
      <Join />
      <Faq />
      <Footer />
      {/* page 2 */}
      {/* <Collection />
      <Item />
      <Box>
        <Subjoin />
        <Subfooter />
      </Box> */}

      {/* page 3 */}
      {/* <Itemdetails />
      <Nftdetails />
      <Box>
        <Typography
          sx={{
            // fontSize: "44px",
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
      <Subfooter /> */}
    </>
  );
}
{
  /* <ToggleColorMode /> */
}
