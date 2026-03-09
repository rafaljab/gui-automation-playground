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
import { useAuth } from "@context/AuthProvider.tsx";

type Props = {
  menuOpened: boolean;
  setMenuOpened: Dispatch<SetStateAction<boolean>>;
};

const TopMenu = ({ menuOpened, setMenuOpened }: Props) => {
  const toggleMenuOpened = (): void => setMenuOpened(!menuOpened);
  const { logout, deleteAccount } = useAuth();

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
          <Button onClick={deleteAccount} color="error" sx={{ mr: 2 }}>
            Delete Account
          </Button>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
