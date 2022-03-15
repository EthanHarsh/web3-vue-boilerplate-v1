const express = require('express');
const path = require('path');
const cors = require("cors");
const app = express();
app.use(cors())

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/web3-wallet-connect', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000
app.listen(port);