import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Layout from './Layout';
import Recommendation from './Recommendation';
import Advertisment from './Advertisment';
import ProductsTest from './ProductsTest';
import Carousel from './Carousel';
import Search from './Search';
import Category from './Category';

const Home = () => {

    return (<>
        <Layout>
            {/* <Search /> */}
            <Carousel />
            <Recommendation />
            {/* <Sidebar /> */}
            {/* <ProductsTest /> */}
            {/* <Advertisment /> */}
        </Layout>
    </>
    )
}

export default Home;