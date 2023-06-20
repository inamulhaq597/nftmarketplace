import { ImportantDevices } from "@material-ui/icons";
import { blue, pink, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { Bakbak_One } from "next/font/google";

const babak = Bakbak_One({
  weight: "400",
  subsets: ["latin"],
});

export const theme = createTheme({
  typography: {
    fontFamily: babak.style.fontFamily,
  },
  palette: {
    primary: { main: "#21E786" },
    secondary: { main: "#FFFFFF" },
    info: { main: "#C2C3C5" },
    success: { main: "#888B8E" },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `4px dashed ${red[500]}`,
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1410px !important",
        },
      },
    },
  },
});

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}
{
  /* <ThemeProvider theme={theme}>
        
        <Button variant="contained">Contained</Button>

        <Button variant="outlined">Outlined</Button>
      
      </ThemeProvider> */
}
//   "use client";
