// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import MyOrder from './MyOrder';
import { isAuthenticated } from "../auth";
import { getOrders } from "../order";
import MyProduct from './MyProduct';
import Layout from './Layout';
import User from './User';
import MyFavor from './MyFavor';
import DataCard from './DataCard';
import Chart from './Chart';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const Element = ({ className, location }) => {
    const [value, setValue] = useState(location && location.state && location.state.state.value || 0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Layout>
                <div className={className}>
                    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <Tabs value={value} onChange={handleChange} centered>
                            <Tab label="基本資料" value={0} />
                            <Tab label="我的收藏" value={1} />
                            <Tab label="我的賣場" value={2} />
                            <Tab label="數據中心" value={3} />
                            <Tab label="我的訂單" value={4} />
                        </Tabs>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                        // alignItems="center"
                        // justifyContent="center"
                        // style={{ minHeight: '100vh' }}
                        >

                            <Grid item xs={3}>
                                <TabPanel value={value} index={0}>
                                    <Container maxWidth="lg">

                                        {/* <div className="member-box">
                                            <div className="account-content">
                                                <div className="wrap">
                                                    <div className="account">
                                                        <div className="accountWrap">
                                                            <a href="" className="phoho-a">
                                                                <img src="https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1611735292266.jpg" alt="" className="photo" />
                                                            </a>
                                                            <a href="" className="account-a">{user.email}</a>
                                                        </div>
                                                    </div>
                                                    <div className="accordion update-wrap" id="accordionPanelsStayOpenExample">
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                                <button className="accordion-button btn-pink" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">會員基本資料</button>
                                                            </h2>
                                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                                                <div className="accordion-body">
                                                                    <div className="input-wrap">
                                                                        <form action="">
                                                                            <label for="name">真實姓名：</label>
                                                                            <input type="text" name="name" id="name" value={user.username} /><br /><br />
                                                                            <label for="phone">聯絡電話：</label>
                                                                            <input type="text" name="phone" id="phone" value="0911122233" /><br /><br />
                                                                            <label for="address">通訊地址：</label>
                                                                            <input type="text" name="address" id="address" value="台中市南屯區公益路二段" />
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                                <button className="accordion-button btn-pink collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">變更密碼</button>
                                                            </h2>
                                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                                                <div className="accordion-body">
                                                                    <div className="input-wrap">
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
                                                        <button className="btn pinkBtn btn-light btn-mg">儲存變更</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <User />
                                    </Container>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Container maxWidth="lg">
                                        <MyFavor />
                                    </Container>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Container maxWidth="lg">
                                        <MyOrder title="賣家訂單" />
                                        <br />
                                        <br />
                                        <MyProduct />
                                    </Container>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <Container maxWidth="lg">
                                        <Grid container spacing={2}>
                                            <Grid item xs={3}>
                                                <DataCard />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DataCard />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DataCard />
                                            </Grid>
                                            <Grid item xs={3}>
                                                <DataCard />
                                            </Grid>
                                        </Grid>
                                        <br />
                                        <br />
                                        <Chart />
                                    </Container>
                                </TabPanel>
                                <TabPanel value={value} index={4}>
                                    <Container maxWidth="lg">
                                        <MyOrder title="買家訂單" />
                                    </Container>
                                </TabPanel>
                            </Grid>

                        </Grid>

                    </Box>
                </div >
            </Layout >
        </>
    )
}

const MemberCenter = styled(Element)`

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