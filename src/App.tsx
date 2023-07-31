import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "./components/Navbar";

function App() {
  // Use the useTheme hook to access theme
  const theme = useTheme();

  // Access breakpoints from theme
  const { breakpoints } = theme;

  // Use the useMediaQuery hook to render aside on large devices
  const matches = useMediaQuery(breakpoints.down("sm"));

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
      </Grid>
      <Grid container columns={{ xs: 6, sm: 12 }}>
        {!matches && (
          <Grid item xs={6} sx={{ bgcolor: "gold" }}>
            <Typography>Aside</Typography>
          </Grid>
        )}
        <Grid item xs={6} sx={{ bgcolor: "dodgerblue" }}>
          <Typography>Main</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
