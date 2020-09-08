import React from "react";
import './topbar.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Topbar = () => {
    return (
        <div className="topbar">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 align="center">Verkkomedia</h1>
            </Link>
        </div>
    )
}

export default Topbar;