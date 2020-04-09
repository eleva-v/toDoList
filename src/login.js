import React, { useState } from "react";
import "./login.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Link } from "react-router-dom";
// import TextField from "@material-ui/core";

const Log = () => {
    const [login, setLogin] = useState("");



    const handleChange = e => { setLogin(e.target.value); }
    const handleClick = (props) => {
        console.log(props)
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

                    <Button type="success" onClick={handleClick}>
                        <Link to={`/App`} > Войти </Link>
                    </Button>

                </div>
            </div>
        </div >
    )
}

export default Log;