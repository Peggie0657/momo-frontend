import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function preventDefault(event) {
    event.preventDefault();
}

export default function DataCard() {
    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 200,
            }}
        >
            <title>Recent Deposits</title>
            <Typography component="p" variant="h5">
                銷售額
            </Typography>
            <Typography component="p" variant="h5">
                $3,024.00
            </Typography>
            <br />
            <br />
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                Vs 上個月: 37%
                <span style={{ color: "green" }}>
                    <i class="fas fa-arrow-up"></i>
                </span>
            </Typography>
        </Paper>
    );
}