import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import styled from 'styled-components'
import { isAuthenticated } from "../auth";
import { addOrder } from '../order';
import { emptyCart, getCart, removeItem } from './cartHelpers';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { checkOutOneTime, checkOutATM } from '../order';
import Layout from './Layout';


const Element = ({ className, location }) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [values, setValues] = useState({});
    const history = useHistory();
    const token = isAuthenticated() && isAuthenticated().accessToken

    const { name, phone, address, payment } = values

    const handleSubmit = () => {
        products.forEach(item => {
            if (getCart().find(item2 => item2.id === item.id)) {
                removeItem(getCart().find(item2 => item2.id === item.id).id)
            }
        })

        if (payment === "credit") {
            checkOutOneTime({
                ...values,
                products,
                total
            })
                .then(data => {
                    var myWindow = window.open("", "response", "resizable=yes");
                    myWindow.document.write(data);
                })
        } else if (payment === "atm") {
            checkOutATM({
                ...values,
                products,
                total
            })
                .then(data => {
                    var myWindow = window.open("", "response", "resizable=yes");
                    myWindow.document.write(data);
                })
        } else {

        }


        // addOrder({ products, total }, token)
        //     .then(data => {
        //         history.push("/")
        //     })

    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    useEffect(() => {
        setProducts(location.state.selectedArr)
        setTotal(location.state.total)
    }, [])

    return (
        <Layout>
            <div className={className} >
                <div class="pink w70 center">
                    <div class="m30">
                        <p class="title center">1 . 訂單內容</p><hr class="mg0" />
                        <table class="table pink-table">
                            <thead>
                                <tr class="thead">
                                    <th scope="col"></th>
                                    <th scope="col">商品名稱</th>
                                    <th scope="col">規格</th>
                                    <th scope="col">數量</th>
                                    <th scope="col">金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>50</td>
                                        <td>{item.num}</td>
                                        <td>{item.num * item.price}</td>
                                    </tr>
                                )}
                            </tbody>
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col" >NT.{total}元</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="col-center">
                        <div class="w50">
                            <p class="title">2 . 購買人資料</p><hr class="mg0" />
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    textAlign: "center"
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-name"
                                    label="姓名"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={name}
                                    onChange={handleChange("name")}
                                />
                                <TextField
                                    id="outlined-phone"
                                    label="電話"
                                    type="tel"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={phone}
                                    onChange={handleChange("phone")}
                                />
                                <TextField
                                    id="outlined-address"
                                    label="地址"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={address}
                                    onChange={handleChange("address")}
                                />
                            </Box>
                        </div>
                        <div class="w50">
                            <p class="title">3 . 付款及運送資訊</p><hr class="mg0" />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">付款方式</FormLabel>
                                <RadioGroup row aria-label="payment" name="row-radio-buttons-group">
                                    <FormControlLabel value="credit" control={<Radio value="credit" onChange={handleChange("payment")} />} label="線上刷卡" />
                                    <FormControlLabel value="cash" control={<Radio value="cash" onChange={handleChange("payment")} />} label="貨到付款" />
                                    <FormControlLabel value="atm" control={<Radio value="atm" onChange={handleChange("payment")} />} label="銀行轉帳" />
                                </RadioGroup>
                                <br />
                                <FormLabel component="legend">運送方式</FormLabel>
                                <RadioGroup row aria-label="delivery" name="row-radio-buttons-group">
                                    <FormControlLabel value="mart" control={<Radio value="mart" onChange={handleChange("delivery")} />} label="超商取貨" />
                                    <FormControlLabel value="home" control={<Radio value="home" onChange={handleChange("delivery")} />} label="宅配" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <button onClick={handleSubmit} class="btn">送出</button>
                </div>
            </div>
        </Layout>)
}

const Checkout = styled(Element)`
.center{
    margin:0 auto;
    text-align:center;
}
.w70{
    width:70%;
}
.w50{
    width:50%;
}
.col-center{
    display:flex;
}
.m30{
    margin:30px 0 50px 0;
    padding-top:15px;
}
.pink{
    border:dotted 6px #fce4ec;
    padding:10px;
    color:#d1445ba4;
}
.pink-table{
    color:#d1445ba4;
}
.btn{
    border:0;
    background-color:#d1445ba4;
    color:#fff;
    border-radius:10px;
    cursor:pointer;
    width:300px;
    margin-top:100px;
}
`

export default Checkout;