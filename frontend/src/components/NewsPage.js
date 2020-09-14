import React from "react"
import { useParams } from "react-router-dom"


const NewsPage = ({ newsList }) => {
    const { id } = useParams()
    const news = newsList.find(n => n.id === Number(id))
    return (
        <div>
            <h1>{news.title}</h1>
            <img src={news.img} alt="img"></img>
            <p>{news.text}</p>
        </div>
    )

}

export default NewsPage;