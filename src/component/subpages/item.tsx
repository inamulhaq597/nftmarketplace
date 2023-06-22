import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import {
  Box,
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
import Image from "next/image";
import Link from "next/link";

const Item = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const itemData = [
    {
      headline: "SKELATON #01",
      img: "/IMG (1).svg",
    },
    {
      headline: "MEECAT #02",
      img: "/IMG (3).svg",
    },
    {
      headline: "SPOTIOR #03",
      img: "/IMG (2).svg",
    },
    {
      headline: "SKISIRS#2",
      img: "/IMG 6.svg",
    },
    {
      headline: "SKISIRS#2",
      img: "/IMG (7).svg",
    },
    {
      headline: "SKISIRS#2",
      img: "/IMG (9).svg",
    },
    {
      headline: "SKISIRS#2",
      img: "/IMG (8).svg",
    },
    {
      headline: "SKISIRS#2",
      img: "/IMG (3).svg",
    },
    {
      headline: "SKISIRS#2",
      img: "/IMG (2).svg",
    },
  ];
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={8} columns={12}>
            <Grid item xs={12} md={4} lg={4}>
              {/* 1 */}
              {/* cLOTHING */}
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
                      fontSize: { xs: "12px", sm: "10px", md: "20px" },
                      fontWeight: "400",
                      flexShrink: 0,
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
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <FormControlLabel
                        value="Combatant"
                        control={<Radio />}
                        label="Combatant"
                      />
                      <FormControlLabel
                        value="Ninja"
                        control={<Radio />}
                        label="Ninja"
                      />
                      <FormControlLabel
                        value="King"
                        control={<Radio />}
                        label="King"
                      />
                      <FormControlLabel
                        value="Queen"
                        control={<Radio />}
                        label="Queen"
                      />
                      <FormControlLabel
                        value="Robot"
                        control={<Radio />}
                        label="Robot"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              {/* 2 */}
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
                      fontSize: { xs: "12px", sm: "10px", md: "20px" },
                      fontWeight: "400",
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
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <FormControlLabel
                        value="EYES"
                        control={<Radio />}
                        label="EYES"
                      />
                      <FormControlLabel
                        value="Green"
                        control={<Radio />}
                        label="Green"
                      />
                      <FormControlLabel
                        value="Mix"
                        control={<Radio />}
                        label="Mix"
                      />
                      <FormControlLabel
                        value="Orange"
                        control={<Radio />}
                        label="Orange"
                      />
                      <FormControlLabel
                        value="glow"
                        control={<Radio />}
                        label="glow"
                      />
                      <FormControlLabel
                        value="Blue"
                        control={<Radio />}
                        label="Blue"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              {/* 3 */}
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
                      fontSize: { xs: "12px", sm: "10px", md: "20px" },
                      fontWeight: "400",
                      flexShrink: 0,
                    }}
                  >
                    FACE
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ borderTop: "1px solid red", borderColor: "#434343" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <FormControlLabel
                        value="Black"
                        control={<Radio />}
                        label="Black"
                      />
                      <FormControlLabel
                        value="White"
                        control={<Radio />}
                        label="White"
                      />
                      <FormControlLabel
                        value="Pink"
                        control={<Radio />}
                        label="Pink"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              {/* 4 */}
              <Accordion
                sx={{
                  backgroundColor: "#141B22",
                  marginBottom: "15px",
                  padding: "8px",
                }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel4" ? (
                      <MinusIcon sx={{ color: "#21E786" }} />
                    ) : (
                      <PlusIcon sx={{ color: "#21E786" }} />
                    )
                  }
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: { xs: "90%", sm: "90%", md: "50%" },
                      fontSize: { xs: "12px", sm: "10px", md: "20px" },
                      fontWeight: "400",
                      flexShrink: 0,
                    }}
                  >
                    SKIN
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ borderTop: "1px solid red", borderColor: "#434343" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <FormControlLabel
                        value="Black"
                        control={<Radio />}
                        label="Black"
                      />
                      <FormControlLabel
                        value="White"
                        control={<Radio />}
                        label="White"
                      />
                      <FormControlLabel
                        value="Pink"
                        control={<Radio />}
                        label="Pink"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              {/* 5 */}
              <Accordion
                sx={{
                  backgroundColor: "#141B22",
                  marginBottom: "15px",
                  padding: "8px",
                }}
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel5" ? (
                      <MinusIcon sx={{ color: "#21E786" }} />
                    ) : (
                      <PlusIcon sx={{ color: "#21E786" }} />
                    )
                  }
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: { xs: "90%", sm: "90%", md: "50%" },
                      fontSize: { xs: "12px", sm: "10px", md: "20px" },
                      fontWeight: "400",
                      flexShrink: 0,
                    }}
                  >
                    BACKGROUND
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ borderTop: "1px solid red", borderColor: "#434343" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <FormControlLabel
                        value="Black"
                        control={<Radio />}
                        label="Black"
                      />
                      <FormControlLabel
                        value="White"
                        control={<Radio />}
                        label="White"
                      />
                      <FormControlLabel
                        value="Pink"
                        control={<Radio />}
                        label="Pink"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
              {/* 6 */}
              <Accordion
                sx={{
                  backgroundColor: "#141B22",
                  marginBottom: "10px",
                  padding: "8px",
                }}
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === "panel6" ? (
                      <MinusIcon sx={{ color: "#21E786" }} />
                    ) : (
                      <PlusIcon sx={{ color: "#21E786" }} />
                    )
                  }
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: { xs: "90%", sm: "90%", md: "50%" },
                      fontSize: { xs: "12px", sm: "10px", md: "20px" },
                      fontWeight: "400",
                      flexShrink: 0,
                    }}
                  >
                    SPECIAL
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{ borderTop: "1px solid red", borderColor: "#434343" }}
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      sx={{
                        color: "#C2C3C5",
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      <FormControlLabel
                        value="Cat"
                        control={<Radio />}
                        label="Cat"
                      />
                      <FormControlLabel
                        value="Sakura"
                        control={<Radio />}
                        label="Sakura"
                      />
                      <FormControlLabel
                        value="Snake"
                        control={<Radio />}
                        label="Snake"
                      />
                      <FormControlLabel
                        value="Eath"
                        control={<Radio />}
                        label="Eath"
                      />
                      <FormControlLabel
                        value="Water"
                        control={<Radio />}
                        label="Water"
                      />
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Box
                sx={{
                  display: { xs: "col", sm: "col", md: "flex" },
                  // justifyContent: "space-between",
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
                <Grid container columns={12} justifyContent={"center"}>
                  {itemData.map((item, ind) => {
                    return (
                      <Grid item xs={12} md={6} lg={4} key={ind}>
                        <Link href={"/collection/singlecard"} key={ind}>
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
