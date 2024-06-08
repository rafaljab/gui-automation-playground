import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Dispatch, SetStateAction } from "react";

const TopMenu = ({
  authenticated,
  setAuthenticated,
  menuOpened,
  setMenuOpened,
}: {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
}) => {
  const toggleMenuOpened = (): void => setMenuOpened(!menuOpened);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          onClick={toggleMenuOpened}
          color="inherit"
          sx={{ paddingRight: "16px" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GUI Automation Playground
        </Typography>

        <Box>
          <Button onClick={() => setAuthenticated(false)} color="inherit">
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
