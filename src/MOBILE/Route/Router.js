import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main} from './index';

const MobileRouter = () => (
    <Switch>
        <Route exact path="/"        component={Main} />
    </Switch>
);


export default MobileRouter;