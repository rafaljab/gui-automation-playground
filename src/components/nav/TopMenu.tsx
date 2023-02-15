import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import {Dispatch, SetStateAction} from 'react';

const TopMenu = ({
                     authenticated,
                     setAuthenticated
                 }: { authenticated: boolean, setAuthenticated: Dispatch<SetStateAction<boolean>> }) => {
    return (
        <AppBar position='fixed' sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    UI Automation Playground
                </Typography>
                <Button onClick={() => setAuthenticated(false)} color='inherit'>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default TopMenu;
