import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Game from './components/Game';


const Router = () => (
    <div>
        <Switch>
            <Route path='/' component={Game} />
        </Switch>
    </div>
);

export default Router;