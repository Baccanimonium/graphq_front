import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PRODUCT_PAGE, MAIN_PAGE } from './config';

import MainPage from './Pages/IndexPage';
import ProductPage from './Pages/ProductPage';
import AdminRoute from './Admin';

const Routes = () => (
    <Switch>
        <Route path="/admin" component={AdminRoute} />
        <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
        <Route path={MAIN_PAGE} component={MainPage} />
    </Switch>
);

export default Routes;
