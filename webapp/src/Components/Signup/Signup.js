import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import RadioGroup from '@material-ui/core/RadioGroup';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hero from '../../Assets/Hero.png'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.jahk.org/">
                JA Hong Kong
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        objectFit: 'contain',
        width: '100%',
        height: '100%',
        verticalAlign: 'middle'
    },
    heroGrid: {
        [theme.breakpoints.only("xs")]: {
            display: 'none',
        },
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Signup() {
    const classes = useStyles();
    const [value, setValue] = useState('student');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const history = useHistory();

    const signinRouteChange = () => {
        let path = '/signin';
        history.push(path);
    }

    const studentRouteChange = () => {
        let path = '/studenthomepage';
        history.push(path);
    }

    const volunteerRouteChange = () => {
        let path = '/volunteerhomepage';
        history.push(path);
    }

    const adminRouteChange = () => {
        let path = '/adminhomepage';
        history.push(path);
    }

    const onSignup = (pathValue) => {
        if (value === 'student') {
            studentRouteChange()
        } else if (value === 'volunteer') {
            volunteerRouteChange()
        } else {
            adminRouteChange()
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.heroGrid}>
                <img src={Hero} alt="Hero" className={classes.image} />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Sign up
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <div style={{ width: '100%' }}>
                            <Typography variant="body1" style={{ width: '100%', textAlign: 'left' }}>Sign Up As:</Typography>
                            <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange} style={{ marginLeft: '20px' }}>
                                <FormControlLabel value="student" control={<Radio color="primary" />} label="Student" />
                                <FormControlLabel value="volunteer" control={<Radio color="primary" />} label="Volunteer" />
                                <FormControlLabel value="admin" control={<Radio color="primary" />} label="Admin" />
                            </RadioGroup>
                        </div>
                        <FormControlLabel
                            style={{ width: '100%', textAlign: 'left' }}
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => onSignup(value)}
                        >
                            Sign Up
            </Button>
                        <Grid container>
                            <Grid item xs style={{ textAlign: 'left' }}>
                                <Link href="#" variant="body2" >
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={signinRouteChange}>
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}