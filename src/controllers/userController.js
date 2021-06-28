const express  = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const userService = require('../services/userService');



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/user', async (req, res) => {
    let { user, password, email } = req.body;

    const createUserService = new userService();

    const userCreate = await createUserService.createUser(user, password, email);

    return res.send(userCreate);
})

module.exports = app;


