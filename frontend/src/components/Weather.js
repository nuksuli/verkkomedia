import React, { useEffect } from 'react'
const [weather, setWeather] = useState({})
useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Turku,fi&appid=2a13da627b2ce9de65e19e0e66a1adf1`)
        .then(res => res.json())
        .then(res => {
            setWeather(res)
        })
}, [])