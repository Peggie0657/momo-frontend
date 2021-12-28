// import React from 'react';
import styled from 'styled-components'

const Element = ({ className }) => (
    <div className={className}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light justify-content-end navbar1">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/220/220127.png" alt="" className="brandImg" />哞哞購物</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">推薦</a>
                    </li>
                </ul>
                <div className="ml-auto mr-1" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">登入</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                會員中心
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">訂單管理</a></li>
                                <li><a className="dropdown-item" href="#">追蹤清單</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#">登出</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">購物車</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <form className="d-flex mt-3 search">
            <input className="form-control me-2" type="search" placeholder="請輸入關鍵字" aria-label="Search" />
            <button className="btn pinkBtn" type="submit">搜尋</button>
        </form>
    </div>

)

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