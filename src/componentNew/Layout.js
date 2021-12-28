import React from 'react';
import Header from '../componentNew/Header';
import Footer from '../componentNew/Footer';

const Layout = ({ title = "", description = "", className, children }) => (
    <div>
        <Header />
        <div className={className}>{children}</div>
        <Footer />
    </div>
)

export default Layout;