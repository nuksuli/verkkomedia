import React from 'react'
import { CardHeader, Card, CardContent, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';


const CommentCard = ({ username, text, rating, model }) => {

    return (
        <div style={{ width: "50%", display: "inline", float: "right", position: "relative" }}>
            <Card
                variant="outlined"
                className={model}
            >
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginRight: "8px" }}>
                    <CardHeader
                        title={username}
                        style={{ width: "100%", paddingRight: "0px" }}
                    />
                    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                        <Rating
                            readOnly
                            value={rating}
                        />
                    </div>
                </div>
                <CardContent
                    style={{
                        textAlign: "justify", display: "block", margin: "8px", position: "relative"
                    }}
                >
                    <Typography paragraph>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

}

export default CommentCard;