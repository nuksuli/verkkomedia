import React from 'react'
import "./middlebar.css"
import NewsCard from "./NewsCard"

const Middlebar = ({ data }) => {
    return (
        <div className="middlebar">
            {
                data.slice(0).reverse().map((news) => (
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