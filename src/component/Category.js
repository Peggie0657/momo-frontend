// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Element = ({ className }) => {

    const historyPush = () => { }
    return (
        <div className={className}>
            <nav class="navbar navbar-expand-lg navbar-light mt-2" >
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/products/0" >女生衣著</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/1">男生衣著</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/2">運動/健身</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/3">男女鞋</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/4">電腦週邊</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/5">美妝保養</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/6">服飾飾品</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/7">手機相機</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/8">家電影音</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/9">居家生活</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/10">寵物</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/11">戶外/旅行</a>
                            </li>
                            <li class="nav-item category">
                                <a class="nav-link" href="/products/12">書籍</a>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    )
}

const Category = styled(Element)`
.nav-link{
    color: #af4448 !important
}
.nav-item:hover{
    background-color: rgba(245, 227, 236, 0.4)
}
.category:after{
    content: "";
    background: #af4448;
    position: absolute;
    bottom: 30%;
    height: 40%;
    width: 1px;
}
`

export default Category;