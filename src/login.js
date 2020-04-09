import React, { useState } from "react";
import "./login.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { browserHistory } from 'react-router'
// import users from './ Users'

// import { Link } from "react-router-dom";




const Log = () => {
    const [login, setLogin] = useState("");

    const log = "log"



    const handleChange = e => { setLogin(e.target.value); }
    const handleClick = () => {

        if (login === log) {
            browserHistory.push(`/App/${log}`)
        } else {
            alert("error")
        }
    }





    return (
        <div className="Auto">
            <div>
                <h1>Авторизация</h1>
                <div className="AutoLog" >
                    <TextField
                        id="login"
                        label="Логин"
                        className="input"
                        onChange={handleChange}
                        value={login}
                    />
                    <Button onClick={handleClick}>
                        Войти
                    </Button>
                    {/* <Users item={login} /> */}
                </div>
            </div>
        </div >
    )
}

export default Log;