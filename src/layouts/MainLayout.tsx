import { Box, CssBaseline } from "@mui/material";
import TopMenu from "../components/nav/TopMenu";
import LeftMenu from "../components/nav/LeftMenu";
import { Outlet } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

const MainLayout = ({
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
  const drawerWidth: number = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopMenu
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <LeftMenu
        drawerWidth={drawerWidth}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Outlet />
    </Box>
  );
};

export default MainLayout;
