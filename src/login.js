import React, { useState } from "react";
import "./login.css";

import { Link } from "react-router-dom";
// import TextField from "@material-ui/core";

const Log = () => {
    const [text, setText] = useState("");
    const handleChange = e => { setText(e.target.value); }
    const handleClick = () => {
        if (text === "log") {
            return <Link to={`/App`} />
        }

    }


    return (
        <div className="Auto"> <h1>Авторизация</h1>
            <div>
                <input
                    id="new-todo"
                    label=" Что нужно сделать?"
                    className="input"
                    onChange={handleChange}
                    value={text}
                // color="secondary"
                // onKeyPress={keyPress}
                />
                <button onClick={handleClick}>click
                    {/* <Link to={`/App`}>click</Link> */}
                </button>
            </div>

        </div >
    )
}

export default Log;