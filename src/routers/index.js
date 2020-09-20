import React from 'react';
import ReactDOM from "react-dom";

import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';


import Home from '../pages/home';
import FusionTable from '../pages/fusiontable'
// console.log(FusionTable)
export default () => {
    return (
        <Router>
            <Route path="/home" component={Home}>
            </Route>
            <Route path="/ftable" component={FusionTable}>
            </Route>
        </Router>
    )
}