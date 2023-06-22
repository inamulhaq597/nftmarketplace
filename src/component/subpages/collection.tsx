import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";

const CollectionCard = () => {
  return (
    <>
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
              fontSize: { xs: "26px", sm: "30px", md: "44px" },
              fontWeight: "400",
            }}
          >
            EXPLORE COLECTIONS{" "}
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
                fontSize: "14px",
                fontWeight: "400",
                paddingX: "20px",
                borderColor: "#888B8E",
              }}
            >
              <Link href="./">
                <Typography
                  sx={{
                    color: "#888B8E",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#21E786",

                      textDecoration: "none",
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>
            </Box>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              <Typography sx={{ color: "primary.main" }}>
                COLLECTIONS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CollectionCard;
