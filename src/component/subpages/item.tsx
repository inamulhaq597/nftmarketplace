import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import {
  Box,
  Button,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Image from "next/image";
import Link from "next/link";

export const itemData = [
  {
    id: 1,
    headline: "SKELATON #01",
    img: "/IMG (1).svg",
    clothing: "combatant",
    eye: "yellow",
    face: "green",
  },
  {
    id: 2,
    headline: "MEECAT #02",
    img: "/IMG (3).svg",
    clothing: "ninja",
    eye: "green",
    face: "pink",
  },
  {
    id: 3,
    headline: "SPOTIOR #03",
    img: "/IMG (2).svg",
    clothing: "king",
    eye: "Mix",
    face: "red",
  },
  {
    id: 4,
    headline: "SKISIRS#2",
    img: "/IMG 6.svg",
    clothing: "Queen",
    eye: "orange",
    face: "yellow",
  },
  {
    id: 5,
    headline: "SKISIRS#2",
    img: "/IMG (7).svg",
    clothing: "combatant",
    eye: "yellow",
    face: "green",
  },
  {
    id: 6,
    headline: "SKISIRS#2",
    img: "/IMG (9).svg",
    clothing: "combatant",
    eye: "yellow",
    face: "green",
  },
  {
    id: 7,
    headline: "SKISIRS#2",
    img: "/IMG (8).svg",
    clothing: "ninja",
    eye: "green",
    face: "pink",
  },
  {
    id: 8,
    headline: "SKISIRS#2",
    img: "/IMG (3).svg",
    clothing: "king",
    eye: "Mix",
    face: "red",
  },
  {
    id: 9,
    headline: "SKISIRS#2",
    img: "/IMG (2).svg",
    clothing: "king",
    eye: "Mix",
    face: "red",
  },
];

const Item = () => {
  const [expanded, setExpanded] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    clothing: "",
    eye: "",
    face: "",
  });

  console.log(selectedFilters, "selectedFilters");

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleRadioChange = (filterName: string, value: string) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterName]: value === prevState[filterName] ? "" : value,
    }));
  };

  // const [isButtonVisible, setIsButtonVisible] = useState(true);

  
  const filteredItems = itemData.filter((item) => {
    const hasClothingFilter = selectedFilters.clothing !== "";
    const hasEyeFilter = selectedFilters.eye !== "";
    const hasFaceFilter = selectedFilters.face !== "";

    console.log("Selected Filters:");
    if (hasClothingFilter) {
      console.log("Clothing:", selectedFilters.clothing);
    }
    if (hasEyeFilter) {
      console.log("Eye:", selectedFilters.eye);
    }
    if (hasFaceFilter) {
      console.log("Face:", selectedFilters.face);
    }

    return (
      (!hasClothingFilter || item.clothing === selectedFilters.clothing) &&
      (!hasEyeFilter || item.eye === selectedFilters.eye) &&
      (!hasFaceFilter || item.face === selectedFilters.face)
    );
  });
  const handleClearFilters = () => {
    setSelectedFilters({
      clothing: "",
      eye: "",
      face: "",
    });
  };
  const renderSelectedFilters = () => {
    const filterItems = Object.entries(selectedFilters).map(
      ([filterName, filterValue]) => {
        if (filterValue !== "") {
          return (
            <Chip
              key={filterName}
              label={`${filterName}: ${filterValue}`}
              onDelete={() => handleRadioChange(filterName, "")}
              color="primary"
              variant="outlined"
              sx={{ marginRight: "5px", marginBottom: "5px" }}
            />
          );
        }
        return null;
      }
    );

    return <Box>{filterItems}</Box>;
  };

  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={8} columns={12}>
            <Grid item xs={12} md={4} lg={4}>
              {/* 1 */}
              {/* CLOTHING */}
              <Accordion
                sx={{
                  backgroundColor: "#141B22",
                  marginBottom: "15px",
                  padding: "8px",
                }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel1" ? (
                      <MinusIcon sx={{ color: "#21E786" }} />
                    ) : (
                      <PlusIcon sx={{ color: "#21E786" }} />
                    )
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: { xs: "90%", sm: "90%", md: "50%" },
                      fontSize: { xs: "12px", sm: "10px", md: "14px" },
                      fontWeight: "400",
                      flexShrink: 0,
                      fontFamily: "Poppins",
                      lineHeight: "22px",
                    }}
                  >
                    CLOTHING
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ borderTop: "1px solid red", borderColor: "#434343" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={selectedFilters.clothing}
                      name="CLOTHING"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onChange={(event) =>
                        handleRadioChange("clothing", event.target.value)
                      }
                    >
                      <FormControlLabel
                        value=""
                        control={<Radio />}
                        label="All"
                      />
                      <FormControlLabel
                        value="combatant"
                        control={<Radio />}
                        label="Combatant"
                      />
                      <FormControlLabel
                        value="ninja"
                        control={<Radio />}
                        label="Ninja"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>

              <Accordion
                sx={{
                  backgroundColor: "#141B22",
                  marginBottom: "15px",
                  padding: "8px",
                }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel2" ? (
                      <MinusIcon sx={{ color: "#21E786" }} />
                    ) : (
                      <PlusIcon sx={{ color: "#21E786" }} />
                    )
                  }
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: { xs: "90%", sm: "90%", md: "50%" },
                      fontSize: { xs: "12px", sm: "10px", md: "14px" },
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      lineHeight: "22px",
                      flexShrink: 0,
                    }}
                  >
                    EYES
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ borderTop: "1px solid red", borderColor: "#434343" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={selectedFilters.eye}
                      name="EYES"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onChange={(event) =>
                        handleRadioChange("eye", event.target.value)
                      }
                    >
                     
                      <FormControlLabel
                        value="yellow"
                        control={<Radio />}
                        label="Yellow"
                      />
                      <FormControlLabel
                        value="green"
                        control={<Radio />}
                        label="Green"
                      />
                      <FormControlLabel
                        value="mix"
                        control={<Radio />}
                        label="Mix"
                      />
                      <FormControlLabel
                        value="orange"
                        control={<Radio />}
                        label="Orange"
                      />
                      <FormControlLabel
                        value="glow"
                        control={<Radio />}
                        label="Glow"
                      />
                      {/* Add other options */}
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "#141B22",
                  marginBottom: "15px",
                  padding: "8px",
                }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel3" ? (
                      <MinusIcon sx={{ color: "#21E786" }} />
                    ) : (
                      <PlusIcon sx={{ color: "#21E786" }} />
                    )
                  }
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: { xs: "90%", sm: "90%", md: "50%" },
                      fontSize: { xs: "12px", sm: "10px", md: "14px" },
                      fontWeight: "400",
                      fontFamily: "Poppins",
                      lineHeight: "22px",
                      flexShrink: 0,
                    }}
                  >
                    FACE
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ borderColor: "#434343" }}>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={selectedFilters.face}
                      name="FACE"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                      onChange={(event) =>
                        handleRadioChange("face", event.target.value)
                      }
                    >
                      <FormControlLabel
                        value="yellow"
                        control={<Radio />}
                        label="Yellow"
                      />
                      <FormControlLabel
                        value="green"
                        control={<Radio />}
                        label="Green"
                      />
                      <FormControlLabel
                        value="mix"
                        control={<Radio />}
                        label="Mix"
                      />
                      <FormControlLabel
                        value="orange"
                        control={<Radio />}
                        label="Orange"
                      />
                      <FormControlLabel
                        value="glow"
                        control={<Radio />}
                        label="Glow"
                      />
                      {/* Add other options */}
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box
                sx={{
                  display: { xs: "col", sm: "col", md: "flex" },

                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "space-between",
                  },
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: { xs: "30px", sm: "30px", md: "44px" },
                    fontWeight: "400",
                  }}
                >
                  All Items
                </Typography>
                <Input
                  placeholder="Search NFT"
                  sx={{
                    color: "#888B8E",
                    backgroundColor: "#141B22",

                    border: "none",
                    borderRadius: "15px",
                    paddingX: { xs: "20px", sm: "20px", md: "30px" },
                  }}
                ></Input>
              </Box>

              {/* pix */}
              <Box>
                <Box>
                  <Box
                    sx={{
                      color: "secondary.main",
                      fontSize: "20px",
                      fontWeight: "400",
                      textDecoration: "none",
                      display: "flex",
                      gap: "20px",
                      alignItems: "center",
                      padding: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                      },
                      textAlign: "center",
                      backgroundColor: "#141B22",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "12px",
                        padding: "10px",
                        alignItems: "center",
                      }}
                    >
                      {renderSelectedFilters()}

                      <Button
                        onClick={handleClearFilters}
                        sx={{ color: "primary.main" }}
                      >
                        Clear ALL
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Grid container columns={12} justifyContent={"center"}>
                  {filteredItems.map((item, ind) => {
                    return (
                      <Grid item xs={12} md={6} lg={4} key={item.id}>
                        <Link
                          href={`/collection/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Box
                            sx={{
                              padding: " 10px",
                              gap: "10px",
                              display: "flex",
                            }}
                          >
                            <Box
                              sx={{
                                backgroundColor: "#141B22",
                                width: "100%",
                              }}
                            >
                              <Box
                                sx={{
                                  padding: {
                                    xs: "15px",
                                    sm: "15px",
                                    md: "10px",
                                  },
                                }}
                              >
                                <img
                                  src={item.img}
                                  alt={""}
                                  width={"100%"}
                                  height={"100%"}
                                />
                              </Box>
                              <Typography
                                sx={{
                                  color: "secondary.main",
                                  fontSize: "20px",
                                  fontWeight: "400",
                                  textDecoration: "none",

                                  padding: {
                                    xs: "10px",
                                    sm: "10px",
                                    md: "10px",
                                  },
                                  textAlign: "center",
                                }}
                              >
                                {" "}
                                {item.headline}
                              </Typography>
                            </Box>
                          </Box>
                        </Link>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Item;
