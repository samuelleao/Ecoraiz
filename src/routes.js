import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/index';
import About from './pages/about';
import Header from './components/header';

function Routes() {
    return (
        <BrowserRouter>
          <Header />
            <Switch>
                <Route path='/' component={Index} exact />
                <Route path='/sobre' component={About} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;