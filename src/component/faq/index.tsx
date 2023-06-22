import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@material-ui/core";
import MinusIcon from "@mui/icons-material/Remove";
import PlusIcon from "@mui/icons-material/Add";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box id={"faq"} sx={{ py: { xs: "30px", sm: "30px", md: "40px" } }}>
      <Container maxWidth={"md"}>
        <Accordion
          sx={{
            backgroundColor: "#141B22",
            marginBottom: "10px",
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
              What are the NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "info.main" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#141B22",
            marginBottom: "10px",
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
              How do i get NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "info.main" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#141B22",
            marginBottom: "10px",
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
              How can we buy your NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "info.main" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#141B22",
            marginBottom: "10px",
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
              Who are the team behind the project?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "info.main" }}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Rest of the Accordions */}
      </Container>
    </Box>
  );
}
