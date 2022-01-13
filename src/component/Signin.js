// import React from 'react';
import { useHistory } from "react-router";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Footer from './Footer';
import { signin, authenticate, googlelogin, facebooklogin, signUpWithOath } from "../auth";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Element = ({ className }) => {
    const history = useHistory();
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    })
    const [show, setShow] = useState(false)
    const [open, setOpen] = React.useState(false);

    const { email, password } = values

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }
    const handleClose = () => {
        setShow(false);
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const clickSubmit = (event) => {
        setOpen(true)
        event.preventDefault()
        signin({ email, password })
            .then(data => {
                if (!data) {
                    setShow(true)
                    setOpen(false)
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
    const google = () => {
        let uid = ""
        googlelogin()
            .then(data => {
                uid = data.user.uid
                signUpWithOath(data)
                    .then(user => {
                        const email = user.email
                        signin({ email, password: uid })
                            .then(data => {
                                authenticate(data)
                                history.push("/")
                            })
                    })
            })
    }
    const facebook = () => {
        facebooklogin()
    }
    return (
        <div className={className} style={{ backgroundColor: "rgb(238, 77, 45)" }}>

            <div style={{ margin: "0 auto", height: "600px", width: "1040px", backgroundImage: "url('https://cf.shopee.tw/file/941617bff55f5cdc82aea8f3bbb16460')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                <div class="form container float-end mt-4">
                    <form class="row g-3 pt-4">
                        <h5 style={{ textAlign: "center" }}>登入</h5>
                        {/* <div class="mb-3">
                            <input type="text" class="form-control" value="" placeholder='請輸入帳號:Email' value={email} required onChange={handleChange("email")} />
                        </div> */}
                        <FormControl sx={{ m: 1, width: '90%', marginLeft: "5%" }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email"
                                type='text'
                                value={values.email}
                                onChange={handleChange('email')}
                                label="Email"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '90%', marginLeft: "5%" }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {/* <div class="mb-4">
                            <div class="form-group">
                                <div class="input-group" id="show_hide_password">
                                    <input class="form-control" type="password" placeholder='請輸入密碼' value={password} onChange={handleChange("password")} />
                                    <div class="input-group-text">
                                        <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div style={{ textAlign: "center" }}>
                            {/* <button class="btn btn-primary" onClick={clickSubmit}>登入</button> */}
                            <Button sx={{ width: "70%" }} variant="contained" disableElevation onClick={clickSubmit}>
                                登入
                            </Button>
                        </div>
                    </form>
                    <div id="middleLine">------------------ or ------------------</div>
                    <div className='pb-4' style={{ display: "flex", textAlign: "center" }}>
                        <div style={{ marginRight: "20px" }}>
                            <a class="btn btn-block btn-social btn-facebook" onClick={facebook}>
                                <i class="fab fa-facebook-f" style={{ marginRight: "15px" }}></i>Facebook
                            </a>
                        </div>
                        <div>
                            <a class="btn btn-block btn-social btn-google" onClick={google}>
                                <i class="fab fa-google" style={{ marginRight: "15px" }}></i>Google
                            </a>
                        </div>
                    </div>
                    <div class="signup">蝦皮新朋友？<a class="signupA" href="/signup">註冊</a></div>
                </div>
            </div >
            <Footer />
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={show}
                onClose={handleClose}
                key="1"
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    帳號密碼錯誤
                </Alert>
            </Snackbar>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div >
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