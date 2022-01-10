import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import styledComponent from 'styled-components'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Layout from '../component/Layout';
import { addItem, itemTotal } from './cartHelpers';

const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

const Element = ({ className }) => {
    const [redirect, setRedirect] = useState(false)
    const [value, setValue] = React.useState(2);
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

    const handleClick = (event) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <Layout>
            {shouldRedirect(redirect)}
            <div className={className}>
                <div className="content">
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                MUI
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/getting-started/installation/"
                            >
                                Core
                            </Link>
                            <Typography color="text.primary">Breadcrumbs</Typography>
                        </Breadcrumbs>
                    </div>
                    <br />
                    <Paper elevation={3} >

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
                            <Box sx={{ width: '100%', maxWidth: 500, padding: "50px 10px 10px 0" }}>
                                <Typography variant="h5" gutterBottom component="div">
                                    JO MALONE 英國梨與小蒼蘭香水 100ml
                                </Typography>
                                <Box
                                    sx={{
                                        width: 200,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Rating
                                        name="text-feedback"
                                        value={value}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                                </Box>
                                <Typography variant="h5" gutterBottom component="div" marginTop={5}>

                                    <Box sx={{ '& button': { m: 1 } }}>
                                        規格：
                                        <Button variant="contained" size="small">
                                            20ml
                                        </Button>
                                        <Button variant="outlined" size="small">
                                            50ml
                                        </Button>
                                        <Button variant="outlined" size="small">
                                            100ml
                                        </Button>
                                    </Box>
                                </Typography>

                                <Typography variant="h5" gutterBottom component="div" marginTop={5}>
                                    數量：
                                    <TextField
                                        type="number"
                                        label="Size"
                                        id="outlined-size-small"
                                        defaultValue="Small"
                                        size="small"
                                    />
                                </Typography>

                                <Typography variant="h5" gutterBottom component="div" marginTop={5}>
                                    售價：4420元
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div" marginTop={5}>
                                    庫存：100
                                </Typography>
                            </Box>
                            {/* <div className="detail">
                                <ul className="detailList">
                                    <li>JO MALONE 英國梨與小蒼蘭香水 100ml</li>
                                    <li>5.0(<a href="#">199</a>)</li>
                                    <li>售價：4420元</li>
                                    <li>庫存：100</li>
                                </ul>
                                <div className="btnWrap">
                                    <button className="btn btnRed" onClick={addIntoCart}>加入購物車</button>
                                </div>
                            </div> */}
                        </div>
                        <hr />
                        <div className="discription">
                            <h6>商品描述</h6>
                            <p>彷彿集結秋天的氣息。 猶如新鮮採摘的清新梨子香氣，搭配白色小蒼蘭所綻放的花香，佐以琥珀、廣藿香與木質香調的柔和芳香。 擁有奢華的金色光澤。</p>
                        </div>
                        <hr />
                        <div className="commentWrap">
                            <Box sx={{ marginBottom: "20px" }}>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    sx={{ display: "block", textAlign: "center" }}
                                />
                                <TextareaAutosize
                                    aria-label="empty textarea"
                                    placeholder=""
                                    minRows={10}
                                    style={{ width: 500 }}
                                />
                            </Box>
                            <Button variant="contained">送出評論</Button>

                            {/* <button type="submit" className="btn btnRed btn-left-40">送出評論</button> */}
                        </div>
                    </Paper>
                </div>

            </div>
        </Layout >
    )
}

const Product = styled(Element)`
.content{
    width:66.666667%;
    margin:20px auto 0;
    // background-color: rgb(250, 237, 237);
}
.info{
    display: flex;
    justify-content:space-evenly;
}
.productImg{
    width:400px;
    height:400px;
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