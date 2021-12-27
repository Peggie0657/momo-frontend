import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Dashboard from './user/UserDashboard'
import Home from './componentNew/Home';
import Shop from './component/Shop';
import Product from './component/Product';
import Cart from './component/Cart';
import Profile from './user/Profile'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/user/dashboard" exact component={Dashboard} />
                <Route path="/profile/:userId" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

