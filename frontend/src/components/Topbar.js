import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    loginButton: {
        left: 0
    },
    postButton: {
        right: 0
    }
});

const Topbar = () => {
    const classes = useStyles()
    return (
        <div className="topbar">
            <Link to="/login">
                <Button
                    className={classes.loginButton}
                    variant="contained"
                    size="large"
                    color="primary">
                    LOGIN
                </Button>
            </Link>
            <h1>
                <Link
                    to="/"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    Verkkomedia
                </Link>
            </h1>
            <Link to="/post">
                <Button className={classes.postButton} variant="contained" size="large" color="secondary">
                    POST
                </Button>
            </Link>
        </div>
    );
};

export default Topbar;
