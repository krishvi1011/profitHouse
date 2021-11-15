import { Link } from 'react-router-dom';
import { makeStyles} from '@material-ui/core' 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { SignOutUser } from "../redux/actions/index-actions";
import { useSelector,useDispatch } from 'react-redux';

export const Header = () => {
    const classes = useStyles();
    const login = useSelector(state => state.logged.isLogged)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(SignOutUser());
    }
    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>Profit House</Typography>
                    {login ? 
                        <>
                            <Link to='/home' className={classes.navLink}><Button color="inherit">Listings</Button></Link>
                            <Link to='/signin' className={classes.navLink}><Button color="inherit" onClick={handleLogout}>Logout</Button></Link>
                        </> :  
                        <>
                            <Link to='/signin' className={classes.navLink}><Button color="inherit">Login</Button></Link>
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