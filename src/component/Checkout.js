import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import styled from 'styled-components'
import { isAuthenticated } from "../auth";
import { addOrder } from '../order';
import { emptyCart, getCart, removeItem } from './cartHelpers';


const Element = ({ className, location }) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const history = useHistory();
    const token = isAuthenticated() && isAuthenticated().accessToken

    const handleSubmit = () => {
        products.forEach(item => {
            if (getCart().find(item2 => item2.id === item.id)) {
                removeItem(getCart().find(item2 => item2.id === item.id).id)
            }
        })
        addOrder({ products, total }, token)
            .then(data => {
                history.push("/")
            })
    }

    useEffect(() => {
        setProducts(location.state.selectedArr)
        setTotal(location.state.total)
    }, [])

    return (<div className={className}>
        <p class="title">1 . 訂單內容</p><hr class="mg0" />
        <table class="table">
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
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col" >
                        <button onClick={handleSubmit}>送出</button>
                    </th>
                </tr>
            </thead>
        </table>

    </div>)
}

const Checkout = styled(Element)`

`

export default Checkout;