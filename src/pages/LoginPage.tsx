import {
    Alert,
    Avatar,
    Box, Button, Collapse,
    Grid, Link,
    TextField,
    Typography
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Dispatch, FormEventHandler, SetStateAction} from 'react';

const LoginPage = (
    {
        handleLoginSubmit,
        loginAlertOpened,
        setLoginAlertOpened
    }: {
        handleLoginSubmit: FormEventHandler<HTMLFormElement>,
        loginAlertOpened: boolean,
        setLoginAlertOpened: Dispatch<SetStateAction<boolean>>
    }) => {
    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component='h1' variant='h5' gutterBottom>
                Log in
            </Typography>
            <Collapse sx={{width: '100%'}} in={loginAlertOpened}>
                <Alert
                    severity='warning'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setLoginAlertOpened(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit"/>
                        </IconButton>
                    }
                    sx={{mb: 1, mt: 1}}
                >
                    Incorrect credentials!
                </Alert>
            </Collapse>
            <Box component='form' onSubmit={handleLoginSubmit} noValidate sx={{mt: 1}}>
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    autoFocus
                />
                <TextField
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                />
                <Typography variant='body2'>Email: admin@example.com</Typography>
                <Typography variant='body2'>Password: admin123</Typography>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{mt: 3, mb: 2}}
                >
                    Log In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href='#' variant='body2'>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='#' variant='body2'>
                            {'Don\'t have an account? Sign Up'}
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default LoginPage;
