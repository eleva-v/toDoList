import React, { useState } from "react";
import "./login.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { browserHistory } from 'react-router'
// import Users from './Users'

// import { Link } from "react-router-dom";




const Log = props => {
    const [login, setLogin] = useState([]);

    const users = [
        { id: 0, name: "log" },
        { id: 2, name: "log2" },
        { id: 3, name: "log3" },
        { id: 4, name: "log4" },
        { id: 5, name: "log5" },
    ]

    const log = users.filter(item => item.name === login);
    console.log(log)
    const handleChange = e => { setLogin(e.target.value); }

    const handleClick = () => {

        if (log.length !== 0) {


            props.history.push(`/app/${login}`)
        } else {
            alert("error")
        }
        setLogin([]);
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

                    <Button onClick={handleClick} className="ButtonOn">
                        Войти
                    </Button>

                </div>
            </div>
        </div >
    )
}

export default Log;