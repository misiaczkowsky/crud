var express = require('express');
var app = express();
app.set('view engine', 'hbs');
app.use(express.urlencoded());
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://michal:michal@cluster0.5zhiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;
client.connect(err => {
    db = client.db("test").collection("studenci");

});
app.get('/', function (req, res) {
    res.render('form');
})
app.post('/', function (req, res) {
    db.insertOne({ firstName: req.body.firstName, lastName: req.body.lastName }, function (err, res) {
        if (err) throw err;

    });
    res.render('udalosie');
})


var server = app.listen(8081);
client.close();