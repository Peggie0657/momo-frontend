import React from 'react';
import Layout from './Layout';
import Recommendation from './Recommendation';
import Carousel from './Carousel';

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