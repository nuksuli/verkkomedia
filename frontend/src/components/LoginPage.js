import React, { useState } from 'react'
import { Card, makeStyles, CardHeader, TextField, Button } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    loginCard: {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5%",
        textAlign: "center"
    },
    textField: {
        marginBottom: "3%",
        marginLeft: "2%",
        marginRight: "2%"
    },
    loginButton: {
        marginBottom: "5%"
    }
})

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const classes = useStyles()
    return (
        <div>
            <Card className={classes.loginCard}>
                <CardHeader title="Admin Login" />
                <form>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        required
                        label="Username"
                        name="username"
                    />
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        required
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                    />
                    <div>
                        <Button
                            className={classes.loginButton}
                            variant="contained"
                        >
                            Login
                    </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default LoginPage