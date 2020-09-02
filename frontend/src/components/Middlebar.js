import React from "react";
import "./middlebar.css"
import NewsCard from "./NewsCard"

const Middlebar = (data) => {
    const obj = data
    const obj2 = JSON.parse(data)

    return (
        <div className="middlebar">
            {
                obj.map(o =>
                    <NewsCard
                        title={o.title}
                        ingress={o.ingress}
                    />
                )
            }
        </div >
    )
}

export default Middlebar;