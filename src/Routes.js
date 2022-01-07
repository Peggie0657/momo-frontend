import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signin from './componentNew/Signin';
import Signup from './componentNew/Signup';
import Dashboard from './user/UserDashboard'
import Home from './componentNew/Home';
import Shop from './component/Shop';
import Product from './componentNew/Product';
import Products from './componentNew/Products';
// import Products from './componentNew/Products';
import Cart from './component/Cart';
import MemberCenter from './componentNew/MemberCenter';
import Profile from './user/Profile'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/products/:categoryId" exact component={Products} />
                <Route path="/products" exact component={Products} />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/memberCenter" exact component={MemberCenter} />
                {/* <Route path="/products" exact component={Products} /> */}
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                {/* <Route path="/user/dashboard" exact component={Dashboard} />
                <Route path="/profile/:userId" exact component={Profile} /> */}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

