const express  = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const listService = require('../services/listService');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/list', async (req, res) => {
    let getDate = req.body.listDate;

    const createListService = new listService();

    const listCreate = await createListService.createList(getDate);

    return res.send(listCreate);
});

app.get('/list', async (req, res) => {
    const getAllListService = new listService();

    const getAllLists = await getAllListService.allList();

    return res.send(getAllLists);
});

app.delete('/list', async (req, res) => {
    let getID = req.body.id;

    const deleteListService = new listService();

    const listDelete = await deleteListService.deleteList(getID);

    return res.send(listDelete);
})

module.exports = app;