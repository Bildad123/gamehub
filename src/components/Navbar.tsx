import { IconButton, Stack, Typography } from "@mui/material";
import FilterVintageSharpIcon from "@mui/icons-material/FilterVintageSharp";
import CatchingPokemonRoundedIcon from "@mui/icons-material/CatchingPokemonRounded";
const Navbar = () => {
  return (
    <>
      <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
        <IconButton disableRipple>
          <CatchingPokemonRoundedIcon fontSize="large" />
        </IconButton>
        <Typography>NavBar</Typography>
      </Stack>
    </>
  );
};

export default Navbar;
