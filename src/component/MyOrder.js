import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getMyOrders } from "../order";
import { isAuthenticated } from "../auth";
import AlertBar from "./AlertBar";

const statusObj = {
    0: "取消訂單",
    1: "尚未確認",
    2: "賣家已確認",
    3: "賣家已出貨",
    4: "完成訂單"
}

const paymentobj = {
    1: "線上刷卡",
    2: "貨到付款",
    3: "銀行轉帳"
}

const shippingobj = {
    1: "超商取貨",
    2: "宅配"
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    No.{row.id}
                </TableCell>
                <TableCell align="right">
                    {statusObj[row.status]}
                </TableCell>
                <TableCell align="right">{shippingobj[row.shipping]}</TableCell>
                <TableCell align="right">{paymentobj[row.payment]}</TableCell>
                <TableCell align="center">{row.setuptime}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                訂單明細
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>商品編號</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>商品名稱</TableCell>
                                        <TableCell>規格</TableCell>
                                        <TableCell align="right">商品單價</TableCell>
                                        <TableCell align="right">數量</TableCell>
                                        <TableCell align="right">總金額 $ {row.alltotal}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.data.map(item => (
                                        <TableRow key={item.id}>
                                            <TableCell component="th" scope="row">
                                                #{item.prid}
                                            </TableCell>
                                            {/* <TableCell>{item.cover}</TableCell> */}
                                            
                                            <TableCell> 
                                                {/* 測試用 */}
                                            <img src="https://imgur.dcard.tw/5SZBJiMh.jpg" width={90}>
                                            </img></TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell >{item.spec}</TableCell>
                                            <TableCell align="right">$ {item.prprice}</TableCell>
                                            <TableCell align="right">
                                                {item.num}
                                            </TableCell>
                                            <TableCell align="right">$ {item.prtotal}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


const MyOrder = (props) => {
    const [orders, setOrders] = useState([])

    const token = isAuthenticated() && isAuthenticated().accessToken

    useEffect(() => {

        var map = {}
        var arr = [];
        getMyOrders(token)
            .then(data => {
                // console.log(data)
                for (var i = 0; i < data.length; i++) {
                    var ai = data[i];
                    if (!map[ai.id]) {
                        arr.push({
                            id: ai.id,
                            status: ai.status,
                            shipping: ai.shipping,
                            payment: ai.payment,
                            setuptime: ai.setuptime,
                            data: [ai]
                        });
                        map[ai.id] = ai;
                    } else {
                        for (var j = 0; j < arr.length; j++) {
                            var dj = arr[j];
                            if (dj.id == ai.id) {
                                dj.data.push(ai);
                                break;
                            }
                        }
                    }
                }
                arr.forEach(item => {
                    let alltotal = 0
                    item.data.forEach(item2 => {
                        alltotal = alltotal + item2.prtotal
                    })
                    const index = arr.indexOf(arr.find(arrObj => arrObj === item))
                    arr[index] = {
                        ...item,
                        alltotal
                    }
                })
                console.log(arr)

                setOrders(arr)
            })
    }, [])

    return (
        <>
            <h4>{props.title}</h4>
            <Paper elevation={3}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <TableContainer >
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>訂單編號</TableCell>
                                    <TableCell align="right">訂單狀況</TableCell>
                                    <TableCell align="right">運送方式</TableCell>
                                    <TableCell align="right">付款方式</TableCell>
                                    <TableCell align="center">訂單日期</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row) => (
                                    <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </>
    );
}

export default MyOrder;

