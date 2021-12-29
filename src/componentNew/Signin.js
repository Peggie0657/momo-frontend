// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import Layout from './Layout';

const Element = ({ className }) => {

    return (
        <Layout>
            <div className={className} style={{ backgroundColor: "rgb(238, 77, 45)" }}>
                <div style={{ margin: "0 auto", height: "600px", width: "1040px", backgroundImage: "url('https://cf.shopee.tw/file/941617bff55f5cdc82aea8f3bbb16460')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <div class="form container float-end">
                        <form class="row g-3 pt-4">
                            <h5>登入</h5>
                            <div class="mb-3">
                                <input type="text" class="form-control" value="" placeholder='請輸入帳號:Email' required />
                            </div>
                            <div class="mb-4">
                                <div class="form-group">
                                    <div class="input-group" id="show_hide_password">
                                        <input class="form-control" type="password" placeholder='密碼' />
                                        <div class="input-group-text">
                                            <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid gap-2 col-12 mx-auto loginBtn pb-4">
                                <button class="btn btn-primary" type="submit">登入</button>
                            </div>
                        </form>
                        <div id="middleLine">------------------ or ------------------</div>
                        <div className='pb-5' style={{ display: "flex", textAlign: "center" }}>
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
                    </div>
                </div>
            </div>
        </Layout >
    )
}

const Signin = styled(Element)`
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
`

export default Signin;