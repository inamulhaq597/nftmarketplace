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
      <Faq />
      <Join />

      <Footer />
    </>
  );
}
{
  /* <ToggleColorMode /> */
}
