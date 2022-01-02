// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

const Element = ({ className }) => {

    return (
        <div className={className}>
            <section id="sidebar">
                <div class="border-bottom pb-2 ml-2">
                    <h4 id="burgundy">Filters</h4>
                </div>
                <div class="py-2 border-bottom ml-3">
                    <h6 class="font-weight-bold">分類</h6>
                    <div id="orange"><span class="fa fa-minus"></span></div>
                    <form>
                        <div class="form-group"> <input type="checkbox" id="1" /> <label for="1">女生衣著</label> </div>
                        <div class="form-group"> <input type="checkbox" id="2" /> <label for="2">男生衣著</label> </div>
                        <div class="form-group"> <input type="checkbox" id="3" /> <label for="3">運動/健身</label> </div>
                        <div class="form-group"> <input type="checkbox" id="4" /> <label for="4">男女鞋</label> </div>
                        <div class="form-group"> <input type="checkbox" id="5" /> <label for="5">電腦週邊</label> </div>
                        <div class="form-group"> <input type="checkbox" id="6" /> <label for="6">美妝保養</label> </div>
                        <div class="form-group"> <input type="checkbox" id="7" /> <label for="7">服飾飾品</label> </div>
                        <div class="form-group"> <input type="checkbox" id="8" /> <label for="8">手機相機</label> </div>
                        <div class="form-group"> <input type="checkbox" id="9" /> <label for="9">家電影音</label> </div>
                        <div class="form-group"> <input type="checkbox" id="10" /> <label for="10">居家生活</label> </div>
                        <div class="form-group"> <input type="checkbox" id="11" /> <label for="11">寵物</label> </div>
                        <div class="form-group"> <input type="checkbox" id="12" /> <label for="12">戶外/旅行</label> </div>
                        <div class="form-group"> <input type="checkbox" id="13" /> <label for="13">書籍</label> </div>
                    </form>
                </div>
                {/* <div class="py-2 border-bottom ml-3">
                    <h6 class="font-weight-bold">Accompainments</h6>
                    <div id="orange"><span class="fa fa-minus"></span></div>
                    <form>
                        <div class="form-group"> <input type="checkbox" id="tea" /> <label for="tea">Tea Cakes</label> </div>
                        <div class="form-group"> <input type="checkbox" id="cookies" /> <label for="cookies">Cookies</label> </div>
                        <div class="form-group"> <input type="checkbox" id="pastries" /> <label for="pastries">Pastries</label> </div>
                        <div class="form-group"> <input type="checkbox" id="dough" /> <label for="dough">Cookie Dough</label> </div>
                        <div class="form-group"> <input type="checkbox" id="choco" /> <label for="choco">Chocolates</label> </div>
                    </form>
                </div> */}
                <div class="py-2 ml-3">
                    <h6 class="font-weight-bold">Top Offers</h6>
                    <div id="orange"><span class="fa fa-minus"></span></div>
                    <form>
                        <div class="form-group"> <input type="checkbox" id="25off" /> <label for="25">25% off</label> </div>
                        <div class="form-group"> <input type="checkbox" id="5off" /> <label for="5off" id="off">5% off on artisan breads</label> </div>
                    </form>
                </div>
            </section>
        </div >

    )
}

const Products = styled(Element)`
* {
    box-sizing: border-box
}


#burgundy {
    color: rgb(153, 40, 59)
}

#orange,
select,
.btn {
    color: orange
}

.form-group {
    margin-bottom: 5px
}

label {
    padding-left: 10px
}

.form-group:last-child {
    margin-bottom: 0
}

h6 {
    margin-bottom: 0px
}

@media(min-width:1200px) {
    
    .text {
        display: none
    }

    #sidebar {
        width: 30%;
        padding: 20px;
        float: left
    }
}

@media(min-width:992px) and (max-width:1199px) {
    .text {
        display: none
    }

    #sidebar {
        width: 30%;
        padding: 20px;
        float: left
    }
}

@media(min-width:768px) and (max-width:991px) {
    .text {
        display: none
    }

    #sidebar {
        width: 35%;
        padding: 20px;
        float: left
    }
}

@media(min-width:576px) and (max-width:767px) {
    .text {
        display: none
    }
    #sidebar {
        width: 40%;
        padding: 20px;
        float: left
    }
    #off {
        padding-left: 2px
    }
    
}

@media(max-width:575px) {
    #sidebar {
        display: none
    }
}
`

export default Products;