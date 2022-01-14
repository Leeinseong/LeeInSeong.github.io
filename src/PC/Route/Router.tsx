import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main} from './index';

const PC_Router = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    </Router>
);


export default PC_Router;