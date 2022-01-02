import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'
import Layout from '../component/Layout';
import { addItem, itemTotal } from './cartHelpers';

const Element = ({ className }) => {
    const [redirect, setRedirect] = useState(false)

    const addIntoCart = () => {
        addItem({ id: 1, _id: 1 }, () => {
            setRedirect(true)
        })
    }

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/" />
        }
    }

    return (
        <Layout>
            {shouldRedirect(redirect)}
            <div className={className}>
                <div className="content">
                    <div className="breadcrumbWrap">
                        <nav className="breadcrumb" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">美妝保養</a></li>
                                <li className="breadcrumb-item active" aria-current="page">香氛</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="info">
                        <div id="carouselExampleIndicators" className="carousel slide slide-500" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button slide-indicator" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button slide-indicator" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button slide-indicator" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://7ego.7-11.com.tw/Files/market/106354/image/MAI_214356379_X700X700.jpg"
                                        className="d-block w-100 productImg" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://7ego.7-11.com.tw/Files/market/106354/image/MAI_214356379_X700X700.jpg"
                                        className="d-block w-100 productImg" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://7ego.7-11.com.tw/Files/market/106354/image/MAI_214356379_X700X700.jpg"
                                        className="d-block w-100 productImg" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev slide-indicator" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next slide-indicator" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="detail">
                            <ul className="detailList">
                                <li>JO MALONE 英國梨與小蒼蘭香水 100ml</li>
                                <li>5.0(<a href="#">199</a>)</li>
                                <li>售價：4420元</li>
                                <li>庫存：100</li>
                            </ul>
                            <div className="btnWrap">
                                {/* <button className="btn btnRed btn-right-15">直接購買</button> */}
                                <button className="btn btnRed" onClick={addIntoCart}>加入購物車</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="discription">
                        <h6>商品描述</h6>
                        <p>彷彿集結秋天的氣息。 猶如新鮮採摘的清新梨子香氣，搭配白色小蒼蘭所綻放的花香，佐以琥珀、廣藿香與木質香調的柔和芳香。 擁有奢華的金色光澤。</p>
                    </div>
                    <hr />
                    <div className="commentWrap">
                        <input type="textfield" className="commentField" />
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <button type="submit" className="btn btnRed btn-left-40">送出評論</button>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

const Product = styled(Element)`
.content{
    width:66.666667%;
    margin:20px auto 0;
    background-color: rgb(250, 237, 237);
}
.info{
    display: flex;
    justify-content:space-evenly;
}
.productImg{
    width:400px;
    height:400px;
}
.detail{
    padding-top:50px;
    height:400px;
}
.detailList{
    font-size: 25px;
}
.detailList>li{
    margin:15px 0;
}
.detailList>li:nth-child(2){
    font-size: 15px;
    margin-left:85%;
}
.discription{
    margin-top: 50px;
    text-align: center;
}
.discription h6{
    font-size: 30px;
}
.discription p{
    margin: 20px 80px 70px;
    font-size: 20px;
    text-align: left;
}
.btnRed{
    background-color:rgb(240, 147, 147);
}
.btn-right-15{
    margin-right:15px;
}
.slide-indicator{
    background-color: rgb(165, 165, 165);
}
.slide-500{
    width:400px;
    height:400px;
}
.btnWrap{
    text-align: right;
    margin-top:90px;
}
.breadcrumbWrap{
    background-color: #fff;
}
.commentWrap{
    text-align: center;
    padding:30px;
}
.commentField{
    width:400px;
    height:200px;
    margin-right: 30px;
}
.btn-left-40{
    margin-left:40px ;
}
.checked {
    color: orange;
}
`

export default Product;