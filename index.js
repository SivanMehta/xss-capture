var app = require('express')();
var http = require('http').Server(app);

const port = process.env.PORT || 5000

// 'persist data'
var data = []

app.get('/steal', (req, res) => {
    // record data
    data.push(req.query)

    res.send('Your data has been captured!')
})

app.get('/', (req, res) => {
    // send formatted json of all of the captured data
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data, null, 4))
})

http.listen(port, () => {
    console.log('server started at ' + port);
})
