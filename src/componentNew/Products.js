import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Layout from './Layout';
import Filter from './Filter';
import { getProducts } from "../product";

const Element = ({ className, match }) => {
    const [products, setProducts] = useState([])

    const categoryId = match.params.categoryId

    useEffect(() => {
        getProducts()
            .then(data => {
                if (data) {
                    setProducts(data)
                }
            })
    }, [])
    return (
        <Layout>
            <div className={className}>
                <div className="prod-content">

                    <nav class="breadcrumb">
                        <a class="breadcrumb-item" href="#">首頁</a>
                        <a class="breadcrumb-item" href="#">首頁下一頁</a>
                        <a class="breadcrumb-item active" href="#">當前頁</a>
                    </nav>

                    <div class="dropdown-box">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                商品價格
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">高到低</a></li>
                                <li><a class="dropdown-item" href="#">低到高</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle dropdown-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                上架日期
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">新到舊</a></li>
                                <li><a class="dropdown-item" href="#">舊到新</a></li>
                            </ul>
                        </div>
                        <button class="btn btn-secondary dropdown-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            熱門商品
                        </button>
                    </div>

                    <div className="row">
                        {products && products.map(item => (
                            <a className="col-6 col-lg-3 mt-3" href={`/product/${item.id}`} style={{ textDecoration: "none", color: "#000" }}>
                                <div className="card">
                                    <img src="https://cf.shopee.tw/file/b5772fc8fe61728bd8afd0b135c54cf3_tn" className="card-img-top card-img-size"
                                        alt="..." />
                                    <div class="card-body" style={{ fontSize: "1.2rem" }}>
                                        <h3 class="card-title">{item.name.slice(0, 10)}</h3>
                                        <p class="card-text">{item.description.slice(0, 10)}</p>
                                        <p class="card-text">${item.price}</p>
                                        <p class="card-text">數量：{item.stock}</p>
                                    </div>
                                    {/* <div className="card-body">
                                    <p className="card-text card-content">名稱：{item.name.slice(0, 10)}</p>
                                    <p className="card-text card-content">描述：{item.description.slice(0, 10)}</p>
                                    <p className="price-div">價格：{item.price}</p>
                                    <p className="">數量：{item.stock}</p>
                                </div> */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Filter categoryId={categoryId} />
        </Layout>
    )
}
const Products = styled(Element)`
.prod-content{
    width: 66.666667%;
    margin: 0 auto;
    margin-top:20px;
}
.card:hover {
  -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-box-shadow: 0 6px 16px rgba(0,0,0,0.12);
    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}
.card-style{
    height: 350px;
}

.card-content{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.price-div{
    position: absolute;
    bottom:5px;
}
.card-position{
    position: relative;
}
.card-img-size{
    height: 200px;
}
.dropdown-box{
    background-color: rgb(221, 208, 216);
    height: 50px;
    display: flex;
    justify-content: start;
}
.dropdown-btn{
    margin: 5px auto auto 5px;
}

.price-div{
    position: absolute;
    bottom:5px;
    color: black;
}
.a-style{
    text-decoration: none;
}   
`

export default Products;