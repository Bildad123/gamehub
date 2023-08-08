import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useContext } from "react";
import { ColorModeContext } from "../contexts/ColorModeProvider";
const Navbar = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <IconButton disableRipple>
          <Typography sx={{ fontWeight: 900, fontSize: 20 }}>
            R A W G
          </Typography>
        </IconButton>

        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Stack>
    </>
  );
};

export default Navbar;
