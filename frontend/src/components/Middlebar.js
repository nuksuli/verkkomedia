import React from 'react'
import "./middlebar.css"
import NewsCard from "./NewsCard"

const Middlebar = ({ data }) => {
    console.log(data[1].id)
    return (
        <div className="middlebar">
            {
                data.map((news) => (
                    <NewsCard
                        img={news.img}
                        id={news.id}
                        title={news.title}
                        ingress={news.ingress}
                    />
                )

                )
            }
        </div >
    )
}

export default Middlebar;