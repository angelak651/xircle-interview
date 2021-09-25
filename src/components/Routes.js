import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Landing from './Landing';
import history from './History';
import Charts from "./Charts";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/Charts" exact component={Charts} />
                </Switch>
            </Router>
        )
    }
}