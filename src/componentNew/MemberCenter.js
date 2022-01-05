// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import { itemTotal } from './cartHelpers'
import Cart from './Cart'
import { isAuthenticated, signout } from "../auth";
import Layout from './Layout';

const Element = ({ className }) => {
    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
        setItemCount(itemTotal())
    }, []);
    return (
        <Layout>
            <div className={className}>
                <div class="content">
                    <div class="nav flex-column nav-pills me-3 list-style" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button class="btn list-group-Btn" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">會員資料</button>
                        <button class="btn list-group-Btn" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">追蹤清單</button>
                        <button class="btn list-group-Btn" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">商品管理</button>
                        <button class="btn list-group-Btn" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">訂單管理</button>
                    </div>
                    <div class="tab-wrap">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="member-box">
                                    <div class="account-content">
                                        <div class="wrap">
                                            <div class="account">
                                                <div class="accountWrap">
                                                    <a href="" class="phoho-a">
                                                        <img src="https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1611735292266.jpg" alt="" class="photo" />
                                                    </a>
                                                    <a href="" class="account-a">1234567890@gmail.com</a>
                                                </div>
                                            </div>
                                            <div class="accordion update-wrap" id="accordionPanelsStayOpenExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                        <button class="accordion-button btn-pink" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">會員基本資料</button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                        <div class="accordion-body">
                                                            <div class="input-wrap">
                                                                <form action="">
                                                                    <label for="name">真實姓名：</label>
                                                                    <input type="text" name="name" id="name" value="炸吉拿棒" /><br /><br />
                                                                    <label for="phone">聯絡電話：</label>
                                                                    <input type="text" name="phone" id="phone" value="0911122233" /><br /><br />
                                                                    <label for="address">通訊地址：</label>
                                                                    <input type="text" name="address" id="address" value="台中市南屯區公益路二段" />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                                        <button class="accordion-button btn-pink collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">變更密碼</button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                        <div class="accordion-body">
                                                            <div class="input-wrap">
                                                                <form action="">
                                                                    <label for="oldPwd">請輸入舊密碼：</label>
                                                                    <input type="text" name="oldPwd" id="oldPwd" /><br /><br />
                                                                    <label for="newPwd">請輸入新密碼：</label>
                                                                    <input type="text" name="newPwd" id="newPwd" /><br /><br />
                                                                    <label for="newPwd2">請確認新密碼：</label>
                                                                    <input type="text" name="newPwd2" id="newPwd2" />
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="btn pinkBtn btn-light btn-mg">儲存變更</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div class="member-box">
                                    <div class="title">
                                        <h5>我的商品</h5>
                                        <button class="btn create-product">新增商品</button>
                                    </div>
                                    <div class="row">
                                        <div class="col-6 col-lg-3 mt-3">
                                            <a href="#" class="a-style">
                                                <div class="card card-style">
                                                    <img src="https://cf.shopee.tw/file/b5772fc8fe61728bd8afd0b135c54cf3_tn" class="card-img-top card-img-size" alt="..." />
                                                    <div class="card-body card-position">
                                                        <p class="card-text card-content">【現貨不用等】NS Switch 台灣公司貨 紅藍主機 灰黑主機 動物森友會 主機 電量加強版 OLED 主機 一年保固</p>
                                                        <p class="price-div">$100</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">.123</div>
                        </div>
                    </div>
                </div >
            </div >
        </Layout>
    )
}

const MemberCenter = styled(Element)`
.content{
    display: flex;
    justify-content: space-evenly;
    margin:50px 140px 0 0;
}
.list-group-position{
    position: absolute;
    top: 20px;
    left: 20px;
}
.list-style{
    width: 150px;
}
.list-group-Btn{
    background-color: pink;
    font-weight: bolder;
    color:rgba(252, 252, 252, 0.87);
    margin:1px;
    border:none;
}
.pinkBtn:hover{
    background-color:rgb(255, 230, 234);
}

.create-product:hover{
    background-color:rgb(142, 110, 150);
    color:white;
}
.create-product{
    background-color: #fff;
    color:rgb(142, 110, 150);
    border:solid 1px rgb(142, 110, 150);
}
.member-box{
    margin-top: 20px;
    width: 900px;
}
.account-content{
    width:900px;
    margin:20px auto 0;
    background-color: rgb(250, 237, 237);
    padding-bottom:50px;
    padding-top:50px;
}
.accountWrap{
    height:220px;

}
.accountWrap a{
    font-size: 20px;
    text-decoration: none;
    display: block;
    text-align: center;
    color: black;
}
.photo{
    width:150px;
    height:150px;
    border-radius: 50%;
    background-color:rgb(248, 231, 210);
    text-align: center;
    color:rgb(117, 79, 85);
}
.account{
    display: flex;
    justify-content: center;
}
.update-wrap{
    width:80%;
    margin:0 auto;
}
.input-wrap input{
    border:solid rgb(245, 201, 201) 1px;
}
.input-wrap{
    width:60%;
    margin:0 auto;
    text-align: center;
}
.pinkBtn{
    border:solid 2px pink;
    color:black;
    white-space: nowrap;
}
.btn-mg{
    margin-top:30px;
    margin-left:80%;
}
.btn-pink{
    color: black;
}

.btn-pink:not(.collapsed) {
    background-color: pink;
    color: #fff;
}
.title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;;
}
.title h5{
    font-size: 30px;
}
.card-style{
    height: 350px;
}
.card-text{
    font-size: 10px;
}
.card-content{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: black;
}
.price-div{
    position: absolute;
    bottom:5px;
    color: black;
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
.a-style{
    text-decoration: none;
}
`

export default MemberCenter;