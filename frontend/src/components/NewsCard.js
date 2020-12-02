import Card from '@material-ui/core/Card';
import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import './link.css';

const useStyles = makeStyles({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 8,
        maxWidth: 650
    }
});

const NewsCard = ({ title, ingress, id }) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <Link
                    className="link"
                    to={`/uutiset/${id}`}
                    style={{ textDecoration: 'none' }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {ingress}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </div>
    );
};

export default NewsCard;
