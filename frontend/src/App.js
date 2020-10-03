import React from 'react';
import Topbar from "./components/Topbar"
import Content from "./components/Content"
import NewsPage from "./components/NewsPage.js"

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

const newsList = [
    {
        id: 1,
        title: "Taas uusi mielenilmaus Malmössä",
        ingress: "Viikonlopun aikana järjestetyt mielenilmaukset keräsivät tuhansia ihmisiä osoittamaan mieltään rasismia vastaan.",
        img: "/images/malmo.jpg",
        text: "Hurjaa on meno",
        author: "Minna Mallikas"
    },
    {
        id: 2,
        title: "Matti Nykänen söi 5 miljoonaa litraa mansikoita",
        ingress: "Matti Nykänen söi mansikoita",
        img: "/images/matti.jpg",
        text: "Tänään on kolme litraa marjaa maistunut. Nyt alkaa riittää, Nykänen kertoi Savon Sanomille, mutta nappasi kuulemma vielä yhden mansikan suuhunsa. Nykänen on myös hankkinut herkkuaan jo talvenkin varalle. - Takakontissa odottelee laatikko perkaamista. Huomenna laitan viipaleiksi ja pakkaseen. Aamuisin saa sitten sekoittaa niitä puuron joukkoon, Nykänen kertoi Savon Sanomille.",
        author: "Mikko Mallikas"
    }
]

const App = () => {
    return (
        <Router>
            <div>
                <Topbar />
            </div>
            <Switch>
                <Route path="/:id">
                    <NewsPage newsList={newsList} />
                </Route>
                <Route path="/">
                    <Content data={newsList} />
                </Route>
            </Switch>
        </Router>
    )
}


export default App;