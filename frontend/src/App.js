import React from 'react';
import Topbar from "./components/Topbar"
import Middlebar from "./components/Middlebar"
import Leftbar from "./components/Leftbar"
import Rightbar from "./components/Rightbar"



const App = () => {
    return (
        <div>
            <Topbar />
            <Rightbar />
            <Middlebar />
            <Leftbar />
        </div>
    )
}

export default App;