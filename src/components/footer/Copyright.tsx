import {Link, Typography} from '@mui/material';
import {Link as ReactLink} from 'react-router-dom';

const Copyright = ({sx}: { sx: object }) => {
    return (
        <Typography variant='body2' color='text.secondary' align='center' sx={sx}>
            {'Copyright © '}
            <Link color='inherit' component={ReactLink} to='/'>
                React Automation Playground
            </Link>
            {` ${new Date().getFullYear()}.`}
        </Typography>
    )
}

export default Copyright;
