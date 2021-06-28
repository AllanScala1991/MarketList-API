const express  = require('express');
const app = express.Router();
const bodyParser = require('body-parser');
const itemService = require('../services/itemService');
const ItemService = require('../services/itemService');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/item', async (req, res) => {
    const dateList = req.body.dateList;

    const getAllItems = new itemService();

    const getItems = await getAllItems.getAllItems(dateList);

    return res.send(getItems);
});

app.get('/item/filter', async (req, res) => {
    const itemName = req.body.name;

    const getItemsFilter = new ItemService();

    const itemFilter = await getItemsFilter.getFilterItems(itemName);

    return res.send(itemFilter);
});

app.post('/item', async (req, res) => {
    const {name, amount, dateList} = req.body;

    const createNewItem = new ItemService();

    const createItem = await createNewItem.createItem(name, amount, dateList);

    return res.send(createItem);
});

app.patch('/item', async (req, res) => {
    const {id, name, amount} = req.body;

    const editItemService = new ItemService();

    const editItem = await editItemService.editItem(id, name, amount);

    return res.send(editItem);
});

app.delete('/item', async (req, res) => {
    const id = req.body.id;

    const deleteItemService = new ItemService();

    const deleteItem = await deleteItemService.deleteItem(id);

    return res.send(deleteItem);
})


module.exports = app;