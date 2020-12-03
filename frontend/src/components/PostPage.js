import React from 'react';
import { Input, TextField, Button } from '@material-ui/core';
import "./PostPage.css"
import { useState } from 'react'
import axios from 'axios'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';



const PostPage = () => {
    const [data, setData] = useState({
        author: "",
        email: "",
        header: "",
        lead: "",
        text: ""
    })
    const [error, setError] = useState({
        email: false
    })
    const [image, setImage] = useState(null)

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        setData({
            ...data,
            [name]: value
        })
        if (name === "email") {
            if (value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                setError({
                    ...error,
                    email: false
                })
            }
            else {
                setError({
                    ...error,
                    email: true
                })
            }

        }
    }
    const handleImage = (event) => {
        const image = event.target.files[0]
        setImage(image)
        console.log(image)
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
        axios
            .post("http://127.0.0.1:8000/api/news/", {
                email: data.email,
                author: data.author,
                header: data.header,
                lead: data.lead,
                text: data.text,
                image: image,
            })
            .then(res => console.log(res))
    }
    return (
        <div className="postpage">
            <form autoComplete="off" onSubmit={handlePost}>
                <Input name="author"
                    required
                    placeholder="Kirjoittaja"
                    variant="outlined"
                    onChange={handleChange}
                >
                </Input>
                <Input placeholder="Sähköposti"
                    required
                    error={error.email}
                    name="email"
                    onChange={handleChange}
                >
                </Input>
                <br />
                <Input placeholder="Otsikko"
                    required
                    name="header"
                    onChange={handleChange}
                >
                </Input>
                <br />
                <Input placeholder="Ingressi"
                    required
                    name="lead"
                    onChange={handleChange}
                    style={{ width: "50vh" }}
                >
                </Input>
                <br />
                <TextField
                    required
                    name="text"
                    onChange={handleChange}
                    style={{ marginTop: "20px" }}
                    className="textfield"
                    placeholder="Syötä tähän uutisesi leipäteksti"
                    multiline
                    rows={30}
                    label="Teksti"
                    variant="outlined"
                /><br />
                <Button
                    type="submit"
                    disabled={error.email}
                >
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
        </div >
    )
}

export default PostPage;