import { Box, CssBaseline, ThemeProvider } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { DarkTheme } from "./assets/styles/dark-theme"



export const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        flexDirection="column"
        bgcolor="background.default"
        color="text.primary"
        padding={0}
        margin={0}
      >
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
