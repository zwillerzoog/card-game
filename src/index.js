import React from 'react';
import ReactDOM from 'react-dom';
// import '/styles/app.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from "./store";
import Layout from "./Layout";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout />
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
