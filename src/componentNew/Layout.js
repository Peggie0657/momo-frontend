import React from 'react';
import Header from '../componentNew/Header';
import Footer from '../componentNew/Footer';
import Carousel from './Carousel';

const Layout = ({ title = "", description = "", className, children }) => (
    <div>
        <Header />
        <Carousel />
        <div className={className}>{children}</div>
        <Footer />
    </div>
)

export default Layout;