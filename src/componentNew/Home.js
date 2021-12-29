import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Products from './Products';
import Category from './Category';
import Advertisment from './Advertisment';
import ProductsTest from './ProductsTest';
import Carousel from './Carousel';
import Search from './Search';

const Home = () => {
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    // const loadProductsBySell = () => {
    //     getProducts('sold').then(data => {
    //         if (data.error) {
    //             setError(data.error)
    //         } else {
    //             setProductsBySell(data)
    //         }
    //     })
    // }

    // const loadProductsByArrival = () => {
    //     getProducts('createdAt').then(data => {
    //         if (data.error) {
    //             setError(data.error)
    //         } else {
    //             setProductsByArrival(data)
    //         }
    //     })
    // }

    useEffect(() => {
        // loadProductsByArrival();
        // loadProductsBySell();
    }, [])

    return (
        <Layout>
            <Search />
            <Carousel />
            <Products />
            {/* <ProductsTest /> */}
            <Category />
            <Advertisment />
        </Layout>
    )
}

export default Home;