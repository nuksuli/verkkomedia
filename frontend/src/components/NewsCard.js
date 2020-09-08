import Card from "@material-ui/core/Card"
import React from "react"
import CardMedia from "@material-ui/core/CardMedia"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { spacing } from '@material-ui/system';
import { makeStyles } from "@material-ui/core";
import "./link.css"


const useStyles = makeStyles({
    root: {
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 8,
        maxWidth: 650,
    },
})

const NewsCard = ({ title, ingress, id, img }) => {
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.root}>
                <Link className="link" to={`/${id}`} style={{ textDecoration: "none" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            image={img}
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
                </Link>
            </Card>
        </div>
    )
}

export default NewsCard;