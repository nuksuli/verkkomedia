import React from 'react';
import './topbar.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Topbar = () => {
    return (
        <div className="topbar">
            <h1>
                <Link
                    to="/"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    Verkkomedia
                </Link>
            </h1>
            <Link to="/post">
                <Button variant="contained" size="large" color="seconday">
                    POST
                </Button>
            </Link>
        </div>
    );
};

export default Topbar;
