import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title = "", description = "", className, children }) => (
    <div>
        <Header />
        <div className={className}>{children}</div>
        <Footer />
    </div>
)

export default Layout;