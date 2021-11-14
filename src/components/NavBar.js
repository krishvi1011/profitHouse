import { Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core' 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { signOutAction } from '../../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const Header = () => {
    const classes = useStyles();
     const login = true
    const dispatch = useDispatch();
    const handleLogout = () => {
        // dispatch(signOutAction());
    }
    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Profit House</Typography>
                    {login ? 
                        <>
                            <Link to='/items' className={classes.navLink}><Button color="inherit">Listings</Button></Link>
                            <Link to='/login' className={classes.navLink}><Button color="inherit" onClick={handleLogout}>Logout</Button></Link>
                        </> :  
                        <>
                            <Link to='/login' className={classes.navLink}><Button color="inherit">Login</Button></Link>
                            <Link to='/signup' className={classes.navLink}><Button color="inherit">Sign Up</Button></Link>
                        </>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
    navbar: {
        color: '#E8E1DF',
    },
    navLink: {
        textDecoration: 'none',
        color: '#E8E1DF'
    }
}));