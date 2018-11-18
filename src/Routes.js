import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PRODUCT_PAGE, MAIN_PAGE, SHOP_PAGE, CHECK_OUT_PAGE } from './config';

import MainPage from './Pages/IndexPage';
import ProductPage from './Pages/ProductPage';
import ShopPage from './Pages/Shop';
import CheckOutPage from './Pages/CheckOut';

import AdminRoute from './Admin';

const Routes = () => (
    <Switch>
        <Route path="/admin" component={AdminRoute} />
        <Route path={`${PRODUCT_PAGE}/:id`} component={ProductPage} />
        <Route path={SHOP_PAGE} component={ShopPage} />
        <Route path={CHECK_OUT_PAGE} component={CheckOutPage} />
        <Route path={MAIN_PAGE} component={MainPage} />
    </Switch>
);

export default Routes;
