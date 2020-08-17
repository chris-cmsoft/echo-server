const express = require('express');
const app = express();
const port = 3000;
const host = "0.0.0.0";

app.use(express.text());
app.use(express.json());

app.all('*', (req, res) => {
    console.log(`[INFO] Handling {${req.method}} request of size: {${req.socket.bytesRead}} bytes`);
    res.send(req.body);
});

app.listen(port, host, () => {
    console.log(`[INFO] Server started at http://${host}:${port}`);
});