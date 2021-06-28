const express  = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const loginService = require('../services/loginService');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    const { user, password } = req.body;

    const userLoginService = new loginService();

    const token = await userLoginService.AuthenticatedUser(user, password);

    return res.send(token);
});


module.exports = app;