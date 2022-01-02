import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Category from './Category';
import Advertisment from './Advertisment';

const Cart = ({ products }) => {
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

    return (
        <div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><svg style={{ marginRight: '5px' }} width="18px" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>購物車</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover table-responsive" id="' + idCartTable + '">
                                <tr title="' + this.summary + '" data-id="' + this.id + '" data-price="' + this.price + '">
                                    <td className="text-center" style={{ width: "" }}><img width="60px" height="60px" src="data:image/jpeg;base64,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" /></td>
                                    <td>快樂吉娃娃</td>
                                    <td title="Unit Price" className="text-right">$30</td>
                                    <td title="Quantity"><input type="number" min="1" style={{ width: "70px" }} className="' + classNameProductQuantity + '" value="1" /></td>
                                    <td title="Total" className="text-right ' + classNameProductTotal + '"></td>
                                    <td title="Remove from Cart" className="text-center" style={{ width: "30px" }}><a href="" className="btn btn-danger" style={{ backgroundColor: "#dc3545", padding: ".375rem .75rem" }}>X</a></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><strong>總金額</strong></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-right"><strong id="' + idGrandTotal + '"></strong></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">X</button> */}
                            <button type="button" className="btn btn-primary">結帳</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;