import Card from "@material-ui/core/Card"
import React from "react"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const news =
{
    "id": 1,
    "title": "Taas uusi mielenilmaus Malmössä",
    "ingress": "Vii-konlopun aikana järjestetyt mielenilmaukset keräsivät tuhansia ihmisiä osoittamaan mieltään rasismia vastaan."
}


const NewsCard = (title, ingress) => {
    return (
        <div>
            <Link to={`/${news.id}`}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/matti.jpg"
                            alt="test"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {ingress}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </div>
    )
}

export default NewsCard;