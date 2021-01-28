import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, About, Project, Skill } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/"        component={Main} />
    </Switch>
);


export default Router;