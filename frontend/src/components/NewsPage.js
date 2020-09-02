import React from "react"
import { useParams } from "react-router-dom"

const NewsPage = (data) => {
    const id = useParams().id
    const newsList = JSON.parse(data)
    const news = newsList.find(nl => nl.id === Number(id))
    return (
        <div>
            <h1>{news.title}</h1>
            <img src={news.img}></img>
            <h4>{news.ingress}</h4>
            <p>{news.text}</p>
        </div>
    )

}

export default NewsPage;