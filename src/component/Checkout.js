import React, { useEffect, useState } from 'react';
import styled from 'styled-components'


const Element = ({ className, location }) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setProducts(location.state.selectedArr)
        setTotal(location.state.total)
    }, [])
    console.log(products)
    console.log(total)

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
                        <td>{item.product.name}</td>
                        <td>50</td>
                        <td>{item.num}</td>
                        <td>{item.num * item.product.price}</td>
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
    </div>)
}

const Checkout = styled(Element)`

`

export default Checkout;