// import React from 'react';
import { useHistory } from "react-router";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Footer from './Footer';
import { signin, authenticate } from "../auth";

const Element = ({ className }) => {
    const history = useHistory();
    const [values, setValues] = useState({
        email: '',
        password: '',
    })

    const { email, password } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        signin({ email, password })
            .then(data => {
                if (!data) {
                    alert("帳號密碼錯誤");
                    setValues({ email: "", password: "" })
                } else {
                    authenticate(data)
                    history.push("/")
                }

                // if (data.error) {
                //     setValues({ ...values, error: data.error, success: false })
                // } else {
                //     setValues({
                //         ...values,
                //         name: "",
                //         email: "",
                //         password: "",
                //         error: "",
                //         success: true
                //     })
                // }
            })
    }
    return (
        <div className={className} style={{ backgroundColor: "rgb(238, 77, 45)" }}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-collapse navbar-light justify-content-end navbar1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/220/220127.png" alt="" className="brandImg" />哞哞購物</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">推薦</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{ margin: "0 auto", height: "600px", width: "1040px", backgroundImage: "url('https://cf.shopee.tw/file/941617bff55f5cdc82aea8f3bbb16460')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                <div class="form container float-end mt-4">
                    <form class="row g-3 pt-4">
                        <h5>登入</h5>
                        <div class="mb-3">
                            <input type="text" class="form-control" value="" placeholder='請輸入帳號:Email' value={email} required onChange={handleChange("email")} />
                        </div>
                        <div class="mb-4">
                            <div class="form-group">
                                <div class="input-group" id="show_hide_password">
                                    <input class="form-control" type="password" placeholder='請輸入密碼' value={password} onChange={handleChange("password")} />
                                    <div class="input-group-text">
                                        <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 col-12 mx-auto loginBtn pb-4">
                            <button class="btn btn-primary" onClick={clickSubmit}>登入</button>
                        </div>
                    </form>
                    <div id="middleLine">------------------ or ------------------</div>
                    <div className='pb-4' style={{ display: "flex", textAlign: "center" }}>
                        <div style={{ marginRight: "20px" }}>
                            <a class="btn btn-block btn-social btn-facebook">
                                <i class="fab fa-facebook-f" style={{ marginRight: "15px" }}></i>Facebook
                            </a>
                        </div>
                        <div>
                            <a class="btn btn-block btn-social btn-google">
                                <i class="fab fa-google" style={{ marginRight: "15px" }}></i>Google
                            </a>
                        </div>
                    </div>
                    <div class="signup">蝦皮新朋友？<a class="signupA" href="/signup">註冊</a></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const Signin = styled(Element)`
.navbar1{
    background-color:rgb(248, 209, 215);
}
.brandImg{
    width:40px;height:35px;
}
.form{
    background-color: #fff;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    border-radius: 0.25rem;
    overflow: hidden;
    width: 26.25rem;
}
#middleLine{
    margin: 10px;
    padding: 10px;
    color: #a3a2a3;
    font-family: monospace;
  }
.btn-facebook {
    color: #fff;
    background-color: #3b5998;
    border-color: rgba(0,0,0,0.2);
}
.btn-social {
    position: relative;
    padding-left: 15px;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.btn-google {
    color: #fff;
    background-color: #dd4b39;
    border-color: rgba(0,0,0,0.2);
}
.signup{
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom : 10%;
}
.signupA{
    color: #ee4d2d;
    text-decoration: none;
}
`

export default Signin;