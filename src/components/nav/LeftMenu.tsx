import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DoneAll from '@mui/icons-material/DoneAll';
import {Link as ReactLink} from 'react-router-dom';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const LeftMenu = ({drawerWidth}: { drawerWidth: number }) => {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}
        >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={ReactLink} to='/'>
                            <ListItemIcon>
                                <HomeIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={ReactLink} to='/todos'>
                            <ListItemIcon>
                                <DoneAll/>
                            </ListItemIcon>
                            <ListItemText primary='TODOs'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={ReactLink} to='/shop'>
                            <ListItemIcon>
                                <ShoppingCart/>
                            </ListItemIcon>
                            <ListItemText primary='Shop'/>
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider/>
            </Box>
        </Drawer>
    )
}

export default LeftMenu;
