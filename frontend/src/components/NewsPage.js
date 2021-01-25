import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions, CardHeader, Collapse, CardMedia, TextField, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import CommentCard from "./CommentCard.js"

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '80%',
        margin: 'auto',
        marginTop: '8px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    header: {
        marginTop: '8px',
        width: "100%"
    },
    textField: {
        width: 'calc(100% - 16px)',
        margin: "8px"
    },
    star: {
        margin: "8px",
        float: "right"
    },
    button: {
        backgroundColor: "#106adf",
        marginLeft: "8px"
    }

}));

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [comments, setComments] = useState([])
    const { id } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);
    const [review, setReview] = useState({
        username: "",
        text: "",
        news_id: id,
        rating: 0,
    })

    useEffect(() => {
        try {
            async function fetchNews() {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/news/${id}/`
                );
                response = await response;
                setNews(response.data);
            }
            fetchNews();
        } catch (e) {
            console.log(e);
        }
        try {
            async function fetchComments() {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/reviews/?news_id=${id}`
                )
                response = await response;
                setComments(response.data)
            }
            fetchComments()
        }
        catch (e) {
            console.log(e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (news.length === 0) {
        return <h1 margin="auto">Uutista ei löydy</h1>;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/api/reviews/", review)
        setComments(comments.concat(review))
        setReview({
            username: "",
            text: "",
            news_id: { id },
            rating: 0,
        })

    }
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader title={news.header} subheader={news.lead} />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Author: ${news.author}`}
                    </Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={news.image}
                />
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>{news.text}</Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <Typography className={classes.header} variant="h5">
                Kirjoita kommentti uutisesta:
                </Typography>
            <div style={{ float: "left", width: "50%", display: "flex" }}>
                <form autoComplete="off" style={{ width: "100%" }} onSubmit={handleSubmit}>
                    <TextField
                        className={classes.textField}
                        required
                        variant="outlined"
                        label="Nimimerkki"
                        value={review.username}
                        onChange={(event) => {
                            setReview({
                                ...review,
                                username: event.target.value
                            })
                        }}
                    />
                    <TextField
                        value={review.text}
                        className={classes.textField}
                        variant="outlined"
                        required
                        label="Kommentti"
                        multiline
                        rows={4}
                        onChange={(event) => {
                            setReview({
                                ...review,
                                text: event.target.value
                            })
                        }}
                    />
                    <Button className={classes.button} type="submit">
                        Lähetä
                    </Button>
                    <Rating
                        name="newsRater"
                        required
                        className={classes.star}
                        value={review.rating}
                        onChange={(event, value) => {
                            setReview({
                                ...review,
                                rating: value
                            })
                        }}
                    />
                </form>
            </div>
            {comments
                .slice(0)
                .reverse()
                .map((comment, i) => (
                    <CommentCard
                        key={i}
                        username={comment.username}
                        rating={comment.rating}
                        text={comment.text}
                        model={classes.textField}
                    />
                ))}
        </div >
    );
};

export default NewsPage;
