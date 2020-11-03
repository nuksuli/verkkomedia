import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


const NewsPage = () => {
    const [news, setNews] = useState([])
    const { id } = useParams()
    useEffect(() => {
        try {
            async function fetchNews() {
                let response = await axios.get(`http://127.0.0.1:8000/api/news/${id}/`)
                response = await response
                console.log(response.data)
                setNews(response.data)
            }
            fetchNews()
        }
        catch (e) {
            console.log(e)
        }
    }, [])
    if (news.length === 0) {
        return (
            <h1>Sivua ei löydy</h1>
        )
    }
    return (
        <div>
            <h1>{news.header}</h1>
            <p>{news.lead}</p>
        </div>
    )

}

export default NewsPage;