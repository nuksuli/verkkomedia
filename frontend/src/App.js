import React, { useEffect, useState } from 'react';
import Topbar from "./components/Topbar"
import Content from "./components/Content"
import NewsPage from "./components/NewsPage.js"
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import NewsCard from './components/NewsCard';



const App = () => {
    const [newsList, setNewsList] = useState([])
    useEffect(() => {
        try {
            async function fetchNews() {
                let response = await axios.get('http://127.0.0.1:8000/api/news/')
                response = await response
                setNewsList(response.data)
            }
            fetchNews()
        }
        catch (e) {
            console.log(e)
        }
    }, [])
    return (
        <Router>
            <div>
                <Topbar />
            </div>
            <Switch>
                <Route path="/:id">
                    <NewsPage />
                </Route>
                <Route path="/">
                    <Content
                        newsList={newsList}
                    />
                </Route>
            </Switch>
        </Router>
    )
}


export default App;