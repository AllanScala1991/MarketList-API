const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwtToken = '97555587495e88cacbf710e1c8196000';
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.send({ "message": "Unauthorized" })
    }

    const token = authToken.split(" ");

    try {
        const decode = jwt.verify(token[1], jwtToken);

        return next();

    } catch (error) {
        console.log(error)
        return res.send({ "message": "Session expired, log in again." })
    }
})

module.exports = app;