const express = require('express');
const compression = require('compression');
const path = require('path');
const ecpay = require('ecpay_payment_nodejs');
const app = express();


app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send('hell from node')
})


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});