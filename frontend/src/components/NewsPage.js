import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardActions, CardHeader, Collapse } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

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
    }
}));

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const { id } = useParams();
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    useEffect(() => {
        try {
            async function fetchNews() {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/news/${id}/`
                );
                response = await response;
                console.log(response.data);
                setNews(response.data);
            }
            fetchNews();
        } catch (e) {
            console.log(e);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if (news.length === 0) {
        return <h1 align="center">Uutista ei löydy</h1>;
    }
    return (
        <Card className={classes.root}>
            <CardHeader title={news.header} subheader={news.lead} />

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {`Author: ${news.author}`}
                </Typography>
            </CardContent>
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
    );
};

export default NewsPage;
