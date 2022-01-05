// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import { itemTotal } from './cartHelpers'
import Cart from './Cart'
import { isAuthenticated, signout } from "../auth";

const Element = ({ className }) => {
    const [itemCount, setItemCount] = useState(0)

    useEffect(() => {
        setItemCount(itemTotal())
    }, []);
    return (
        <div className={className}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-collapse navbar-light justify-content-end navbar1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/220/220127.png" alt="" className="brandImg" />哞哞購物</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">推薦</a> */}
                        </li>
                    </ul>
                    <div className="ml-auto mr-1" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {!isAuthenticated() ? <>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signin">登入</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/signup">註冊</a>
                                </li>
                            </> : null}
                            <li className="nav-item">
                                <a className="nav-link" href="/memberCenter">
                                    會員中心
                                </a>
                                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">訂單管理</a></li>
                                    <li><a className="dropdown-item" href="#">追蹤清單</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">登出</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <svg style={{ marginRight: '5px' }} width="18px" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                    Cart
                                    ({itemCount})
                                </a>
                                {/* <Cart itemCount={itemCount} /> */}
                            </li>
                            {isAuthenticated() ?
                                <li className="nav-item">
                                    <a className="nav-link" href="/" onClick={signout}>登出</a>
                                </li> : null}
                        </ul>
                    </div>
                </div>
            </nav>
            <Cart />
        </div >

    )
}

const Header = styled(Element)`
.navbar1{
    background-color:rgb(248, 209, 215);
}
.brandImg{
    width:40px;height:35px;
}
.login{
    width:100px
}
.search{
    margin:20px auto;
    width:30%;
}
.pinkBtn{
    border:solid 2px pink;
    color:pink;
    white-space: nowrap;
}
`

export default Header;