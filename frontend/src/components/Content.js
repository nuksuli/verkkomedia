import React from "react"
import "./content.css"
import Rightbar from "./Rightbar"
import Leftbar from "./Leftbar"
import Middlebar from "./Middlebar"

const Content = () => {
    return (
        <div>
            <div className="col left">
                <Leftbar />
            </div>
            <div className="col middle">
                <Middlebar />
            </div>
            <div className="col right">
                <Rightbar />
            </div>
        </div>
    )
}

export default Content;