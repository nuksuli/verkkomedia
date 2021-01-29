import React, { useState } from 'react';
import {
    Card,
    makeStyles,
    CardHeader,
    TextField,
    Button
} from '@material-ui/core';
import Calendar from 'react-calendar';
const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    loginCard: {
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%',
        textAlign: 'center'
    },
    textField: {
        marginBottom: '3%',
        marginLeft: '2%',
        marginRight: '2%'
    },
    loginButton: {
        marginBottom: '5%'
    },
    fullDay: {
        backgroundColor: 'red'
    }
});

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    const tileDisabled = ({ date, view }) =>
        date.getDate() === 10 && date.getMonth() === 0;
    const fileClassName = ({ date, view }) =>
        date.getDay() === 1 ? classes.fullDay : null;
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
            <Calendar
                tileDisabled={tileDisabled}
                tileClassName={fileClassName}
            />
        </div>
    );
};

export default LoginPage;
