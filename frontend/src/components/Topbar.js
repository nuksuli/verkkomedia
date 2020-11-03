import React, { useEffect, useState } from "react";
import './topbar.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Topbar = () => {
    const [weather, setWeather] = useState({})
    /**useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Turku,fi&appid=2a13da627b2ce9de65e19e0e66a1adf1`)
            .then(res => res.json())
            .then(res => {
                setWeather(res)
            })
    }, []) **/
    return (
        <div className="topbar">
            <h1 width="200px" align="center">
                <Link to="/" style={{ textDecoration: "none" }}>Verkkomedia
                </Link>
            </h1>
        </div>
    )
}

export default Topbar;