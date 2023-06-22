import { Typography, Box, Link } from "@mui/material";
import React from "react";

const Itemdetails = () => {
  return (
    <Box sx={{ marginBottom: "30px" }}>
      <Box
        sx={{
          backgroundColor: "#141B22",

          display: { xs: "col", sm: "col", md: "col" },
          justifyContent: "center",
          alignItems: "center",
          paddingY: "40px",
          marginBottom: "100px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "secondary.main",
            fontSize: { xs: "25px", sm: "25px", md: "44px" },
            fontWeight: "400",
          }}
        >
          ITEM DETAIL
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: "15px",
          }}
        >
          <Box
            sx={{
              borderRight: "3px solid red",
              fontSize: { xs: "10px", sm: "10px", md: "14px" },
              fontWeight: "400",
              paddingX: "20px",
              borderColor: "#888B8E",
            }}
          >
            <Link href="./" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#888B8E",
                  "&:hover": {
                    color: "#21E786",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              fontSize: { xs: "10px", sm: "10px", md: "14px" },
              fontWeight: "400",
            }}
          >
            <Typography sx={{ color: "primary.main" }}>ITEM DETAIL</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Itemdetails;
