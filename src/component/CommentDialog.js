import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addComment } from "../product";
import { isAuthenticated } from "../auth";


export default function FormDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [broad, setBroad] = useState("")
    const { product } = props
    const token = isAuthenticated() && isAuthenticated().accessToken

    const handleChange = name => event => {
        setBroad(event.target.value)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const clickSubmit = (event) => {
        event.preventDefault()
        addComment({ broad }, token, product)
            .then(data => {
                if (data) {
                    alert("已送出評論")
                    setBroad("")
                    setOpen(false)
                } else {
                    alert("評論失敗")
                    setOpen(false)
                }
            })

    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                評論
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>評論此商品</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="say something"
                        type="text"
                        fullWidth
                        variant="standard"
                        style={{ width: 500 }}
                        onChange={handleChange()}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button onClick={clickSubmit}>送出</Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}