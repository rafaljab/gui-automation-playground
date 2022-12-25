import {Outlet} from 'react-router-dom';
import Copyright from '../components/footer/Copyright';
import {
    Container,
    CssBaseline, Theme,
    ThemeProvider
} from '@mui/material';
import {createTheme} from '@mui/material/styles';

const theme: Theme = createTheme();

const AuthLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline/>
                <Outlet/>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    )
}

export default AuthLayout;
