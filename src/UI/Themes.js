import { ThemeProvider } from "@emotion/react";
import {createTheme} from "@mui/material";


const Theme =(props)=>{

const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#831299",
        darker: "#831299",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return(
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
  )
}
export default Theme;