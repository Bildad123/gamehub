import { useState, useMemo, createContext } from "react";
import { CssBaseline, Grid, Typography, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import ColorModeProvider from "./contexts/ColorModeProvider";
import GameGrid from "./components/GameGrid";

function App() {
  // useState hook for switching between light and dark mode.
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
        //console.log("Toggling color mode");
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  // Access breakpoints from theme
  const { breakpoints } = theme;

  // Use the useMediaQuery hook to render aside on large devices
  const matches = useMediaQuery(breakpoints.down("sm"));

  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider value={colorMode}>
          <CssBaseline />
          <Grid container>
            <Grid item xs={12}>
              <Navbar />
            </Grid>
          </Grid>
          <Grid container columns={{ xs: 6, sm: 12 }}>
            {!matches && (
              <Grid item xs={2}>
                <Typography>Aside</Typography>
              </Grid>
            )}
            <Grid item xs={10}>
              <Typography>Main</Typography>
              <GameGrid />
            </Grid>
          </Grid>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
