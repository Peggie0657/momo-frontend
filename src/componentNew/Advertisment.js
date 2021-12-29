import styled from 'styled-components'

const Element = ({ className }) => (
    <div className={className}>
        <div className="ad1">
            <img className="adImg"
                src="https://img1.momoshop.com.tw/ecm/img/online/81/007/00/000/mobile/bt_7_503_01/bt_7_503_01_e32.png?t=1639106590934"
                alt="" />
            <button type="button" className="btn-close adBtn" aria-label="Close"></button>
        </div>
        <div className="ad2">
            <img src="https://img1.momoshop.com.tw/ecm/img/online/81/007/00/000/mobile/bt_7_503_01/bt_7_503_01_e32.png?t=1639106590934"
                alt="" className="adImg" />
            <button type="button" className="btn-close adBtn" aria-label="Close"></button>
        </div>
    </div>
)

const Advertisment = styled(Element)`
.ad1{
    position: fixed;right:80px;top:150px;width:200px;height:200px;
}
.ad2{
    position: fixed;right:80px;top:350px;
}
.adImg{
    width:200px;height:200px;
}
.adBtn{
    position: absolute;right:15px;top:7px;
}
`

export default Advertisment;