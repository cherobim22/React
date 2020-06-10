import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../src/pages/main';

export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
            </Switch>
        </BrowserRouter>
    );
};