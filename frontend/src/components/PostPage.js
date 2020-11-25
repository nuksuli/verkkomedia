import React from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import "./PostPage.css"
import { mergeClasses } from '@material-ui/styles';



const PostPage = () => {
    return (
        <div className="postpage">
            <form autoComplete="off">
                <Input placeholder="Kirjoittaja" variant="outlined">
                </Input>
                <Input placeholder="Sähköposti">
                </Input><br />
                <Input placeholder="Otsikko">
                </Input><br />
                <Input placeholder="Ingressi"
                    style={{ width: "50vh" }}
                >
                </Input><br />
                <TextField
                    style={{ marginTop: "20px" }}
                    className="textfield"
                    placeholder="Syötä tähän uutisesi leipäteksti"
                    multiline
                    rows={30}
                    label="Teksti"
                    variant="outlined"
                /><br />
                <Button
                >
                    SEND
                </Button>
            </form>
        </div>
    )
}

export default PostPage;