var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = []

app.get('/', function (req, res) {
  res.send(req.body.key)
})

app.post('/', jsonParser, function (req, res) {
  console.log(req.body)
  console.log(req.body.key)
  res.send(req.body)
})



var server = app.listen(3000, function () {

  var host = "localhost"
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})