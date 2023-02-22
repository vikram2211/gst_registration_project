const express = require('express');
const bodyParser = require('body-parser');
const route = require('../src/routes/route');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/gst_db', {
    useNewUrlParser: true
})
    .then(() => console.log("mongoDB connected succesfully."))
    .catch(err => console.log(err))


app.use('/', route);

app.listen(3000, () => {
    console.log("Server running on port", 3000);
})
