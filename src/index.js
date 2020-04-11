import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Log from './login';
// import Item from './Item';
import * as serviceWorker from './serviceWorker';
import App from './App2';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

ReactDOM.render(<Router>
    <Switch>
        <Route path="/" exact component={Log} />
        <Route path="/app/:name" component={App} />
        {/* <Route path="/" exact component={App} />
        <Route path="/item/:id" component={Item} /> */}

    </Switch>
</Router >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
