import {Box, CssBaseline} from '@mui/material';
import TopMenu from '../components/nav/TopMenu';
import LeftMenu from '../components/nav/LeftMenu';
import {Outlet} from 'react-router-dom';
import {Dispatch, SetStateAction} from 'react';

const MainLayout = ({
                        authenticated,
                        setAuthenticated
                    }: { authenticated: boolean, setAuthenticated: Dispatch<SetStateAction<boolean>> }) => {
    const drawerWidth: number = 240;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <TopMenu authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            <LeftMenu drawerWidth={drawerWidth}/>
            <Outlet/>
        </Box>
    );
}

export default MainLayout;
