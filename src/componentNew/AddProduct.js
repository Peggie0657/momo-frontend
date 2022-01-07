// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components'

import { addProduct } from "../product";
import { isAuthenticated } from "../auth";

const Element = ({ className, productsFetch }) => {
    const [redirect, setRedirect] = useState(false)
    const [values, setValues] = useState({
        name: "",
        description: "",
        price: 0,
        stock: 0
    })
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const { name, description, price, stock } = values

    const token = isAuthenticated() && isAuthenticated().accessToken
    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/memberCenter" />
        }
    }
    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        productsFetch({ name, description, price, stock })
        addProduct({ name, description, price, stock }, token)
            .then(data => {
                if (data) {
                    alert("商品建立成功")
                    setValues({
                        name: "",
                        description: "",
                        price: "",
                        stock: ""
                    })

                } else {
                    alert("商品建立失敗")
                }
            })
    }

    const handleImages = (e) => {
        setImages([...e.target.files])
    }

    useEffect(() => {
        if (images.length < 1) return
        const arr = []
        images.forEach(image => arr.push(URL.createObjectURL(image)))
        setImageURLs(arr)
    }, [images])
    console.log(imageURLs)
    return (
        <div className={className}>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProduct">
                新增商品
            </button>

            <div className="modal fade" id="addProduct" tabindex="-1" aria-labelledby="addProductLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">新增商品</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="productInformation">
                                    <form action="">
                                        <b>商品圖片</b>&emsp;
                                        <label className="uploadImg">
                                            <input type="file" id="img" className="img" accept="image/*" multiple onChange={handleImages} />
                                            {/* <i className="fa fa-photo"></i>&ensp; */}
                                            上傳圖片
                                        </label>
                                        {imageURLs && imageURLs.map(item => (
                                            <img src={item} height={100} style={{ margin: "20px" }} alt="" />
                                        ))}
                                        {/* <img src={imagesSrc} height={100} style={{ margin: "20px" }} alt="" /> */}
                                        <br /><br />

                                        <b>商品名稱</b>&emsp;
                                        <input type="text" id="productName" className="productName" value={name} onChange={handleChange("name")} /><br /><br />

                                        <b className="dcTitle">商品描述</b>&emsp;
                                        <textarea name="description" id="description" cols="30" rows="5" value={description} onChange={handleChange("description")}></textarea><br /><br />

                                        <b className="dcTitle">商品描述</b>&emsp;
                                        <select style={{ position: "relative", left: "64px" }} onChange={handleChange("category")}>
                                            <option id="1" >女生衣著</option>
                                            <option id="2" >男生衣著</option>
                                            <option id="3" >運動/健身</option>
                                            <option id="4" >男女鞋</option>
                                            <option id="5" >電腦週邊</option>
                                            <option id="6" >美妝保養</option>
                                            <option id="7" >服飾飾品</option>
                                            <option id="8" >手機相機</option>
                                            <option id="9" >家電影音</option>
                                            <option id="10">居家生活</option>
                                            <option id="11">寵物</option>
                                            <option id="12">戶外/旅行</option>
                                            <option id="13">書籍</option>
                                        </select>
                                        <br /><br />

                                        <b>&emsp;&emsp;價格</b>&emsp;
                                        <input type="number" id="price" className="price" placeholder="NT$" value={price} onChange={handleChange("price")} /><br /><br />

                                        <b className="productSpec">商品數量</b>&emsp;
                                        <input type="number" id="stock" className="stock" value={stock} onChange={handleChange("stock")} /><br />
                                    </form>
                                    {/* <div className="downBtn">
                                        <button id="cancelBtn" className="cancelBtn">取消</button>
                                        <button id="deleteBtn" className="deleteBtn">下架</button>
                                        <button id="updateBtn" className="updateBtn">更新</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="downBtn">
                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                <button id="cancelBtn" className="btn-secondary cancelBtn" data-bs-dismiss="modal">取消</button>
                                <button id="updateBtn" className="updateBtn" onClick={clickSubmit} data-bs-dismiss="modal">新增</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {shouldRedirect(redirect)}

        </div>

    )
}

const AddProduct = styled(Element)`
*{
    font-family:微軟正黑體;
}

.container{
    margin: 50px;
    padding: 10px;
    width: 700px;
    height: 500px;
    /* background-color: #f163b13d; */
    
    /*定位對齊*/
    position: relative;
    margin: auto;
    top: 70px;
}

input, textarea{
    width: 600px;
    height: 20px;
    padding: 5px;
    border: none; 
    border: solid 1px #ccc;
    border-radius: 3px;
  }
#description{
    height: 50px;
    position: relative; left: 64px;
}

.dcTitle{
    position: absolute;
}

.downBtn{
    margin: auto;
    top: 100px;
    text-align:right;
}

.updateBtn{
    color: white;  
    background: #f163b1;
    width: 90px;
    height: 30px;
    margin: 5px;
    margin-top: 30px;
    padding: 5px;
    border-radius: 20px;
    border: 0px;
}
.updateBtn:hover{
    background: #f163b1c0;
}
.cancelBtn, #deleteBtn{
    width: 90px;
    height: 30px;
    margin: 5px;
    margin-top: 30px;
    padding: 5px;
    border-radius: 20px;
    border: 0px;
}

/* 上傳圖片的按鈕 */
.uploadImg{
    padding: 4px;
    border:3px solid;
}
.uploadImg:hover{
    color: #00000085;
}
.img{
    display: none;
}
`

export default AddProduct;