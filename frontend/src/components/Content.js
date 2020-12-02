import React from "react"
import "./content.css"
import Rightbar from "./Rightbar"
import Leftbar from "./Leftbar"
import Middlebar from "./Middlebar"

const Content = ({ newsList }) => {
    return (
        <div className="content">
            <Leftbar />
            <Middlebar data={newsList} />
            <Rightbar />
        </div>
    )
}

export default Content;