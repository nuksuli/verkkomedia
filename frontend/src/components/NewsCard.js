import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, CardMedia, CardHeader, Card } from '@material-ui/core';
import './link.css';

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
        maxWidth: 650
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
});

const NewsCard = ({ title, ingress, id, image }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <Link
                    className="link"
                    to={`/uutiset/${id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <CardHeader title={title} subheader={ingress} />
                    <CardMedia
                        className={classes.media}
                        image={image}
                    />
                </Link>
            </Card>
        </div>
    );
};

export default NewsCard;
