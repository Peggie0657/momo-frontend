// import React from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const currencies = [
    {
        value: '0',
        label: '女生',
    },
    {
        value: '1',
        label: '男生',
    }
];

const Element = ({ className }) => {
    const [currency, setCurrency] = useState('EUR');
    const [values, setValues] = useState({
        oldpassword: '',
        password: '',
        password2: '',
        showOldPassword: false,
        showPassword: false,
        showPassword2: false,
    })
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleClickShowPassword = (value) => {
        if (value === 1) {
            setValues({
                ...values,
                showOldPassword: !values.showOldPassword,
            });
        } else if (value === 2) {
            setValues({
                ...values,
                showPassword: !values.showPassword,
            });
        } else {
            setValues({
                ...values,
                showPassword2: !values.showPassword2,
            });
        }

    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {

    }, [])

    return (<div className={className}>
        <Paper elevation={3} sx={{ padding: "1% 5% 5% 5%" }}>
            <Avatar sx={{ height: '200px', width: '200px', margin: "5% auto" }}></Avatar>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>基本資料</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                            textAlign: "center"
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-number"
                            label="姓名"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="性別"
                            value={currency}
                            onChange={handleChange()}
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-birthday"
                            label="生日"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br />
                        <br />
                        <TextField
                            id="outlined-phone"
                            label="電話"
                            type="tel"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="outlined-addr"
                            label="地址"
                            type="text"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>變更密碼</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl sx={{ m: 1, width: '90%', marginLeft: "5%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-oldPassword">舊密碼</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-oldPassword"
                            type={values.showOldPassword ? 'text' : 'password'}
                            value={values.oldPassword}
                            onChange={handleChange('oldPassword')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword(1)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showOldPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="oldPassword"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '90%', marginLeft: "5%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">新密碼</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword(2)}
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
                    <FormControl sx={{ m: 1, width: '90%', marginLeft: "5%" }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password2">確認新密碼</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password2"
                            type={values.showPassword2 ? 'text' : 'password'}
                            value={values.password2}
                            onChange={handleChange('password2')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => handleClickShowPassword(3)}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword2 ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="password2"
                        />
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </Paper>
    </div>)
}

const User = styled(Element)`

`

export default User;