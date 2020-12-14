import React from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import "./PostPage.css"
import { useState } from 'react'
import axios from 'axios'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';



const PostPage = () => {
    const [data, setData] = useState({
        author: '',
        email: '',
        header: '',
        lead: '',
        text: ''
    });
    const [error, setError] = useState({
        email: false
    })
    const [image, setImage] = useState(null)

    const handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setData({
            ...data,
            [name]: value
        });
        if (name === 'email') {
            if (
                value.match(
                    // eslint-disable-next-line no-useless-escape
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
            ) {
                setError({
                    ...error,
                    email: false
                });
            } else {
                setError({
                    ...error,
                    email: true
                });
            }
        }
    }
    const handleImage = (event) => {
        const image = event.target.files[0]
        setImage(image)
    }

    const InputText = () => {
        if (image === null) {
            return (
                <label>
                    Lisää kuva uutiseesi.
                </label>
            )
        }
        else {
            return (
                <label>
                    Kuva "{image.name}" lisätty
                </label>
            )
        }
    }
    const handlePost = (event) => {
        event.preventDefault()
        const form = new FormData()
        form.append('email', data.email)
        form.append('author', data.author)
        form.append('header', data.header)
        form.append('lead', data.lead)
        form.append('text', data.text)
        form.append('image', image)
        axios
            .post("http://127.0.0.1:8000/api/news/", form, {
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then((res) => {
                if (res.ok) {
                    console.log("Virhe lähetettäessä uutista")
                }
                else {
                    window.location.assign("/")
                }
            });
        setData({
            author: '',
            email: '',
            header: '',
            lead: '',
            text: ''
        })
        setImage(null)
    };
    return (
        <div className="postpage">
            <form autoComplete="off" onSubmit={handlePost}>
                <Input
                    name="author"
                    required
                    placeholder="Kirjoittaja"
                    variant="outlined"
                    onChange={handleChange}
                    value={data.author}
                ></Input>
                <Input
                    placeholder="Sähköposti"
                    required
                    error={error.email}
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                ></Input>
                <br />
                <Input
                    placeholder="Otsikko"
                    required
                    name="header"
                    onChange={handleChange}
                    value={data.header}
                ></Input>
                <br />
                <Input
                    placeholder="Ingressi"
                    required
                    name="lead"
                    onChange={handleChange}
                    style={{ width: '50vh' }}
                    value={data.lead}
                ></Input>
                <br />
                <TextField
                    required
                    name="text"
                    onChange={handleChange}
                    style={{ marginTop: '20px' }}
                    className="textfield"
                    placeholder="Syötä tähän uutisesi leipäteksti"
                    multiline
                    rows={30}
                    label="Teksti"
                    variant="outlined"
                    value={data.text}
                />
                <br />
                <Button type="submit" disabled={error.email}>
                    SEND
                </Button>
                <input
                    required
                    className="disabledInput"
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={handleImage}
                />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <InputText />
            </form>
        </div>
    );
};

export default PostPage;
