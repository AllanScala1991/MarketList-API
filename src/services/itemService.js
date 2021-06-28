const itemModel = require ("../models/itemModel");

class ItemService {

    async createItem(name, amount, dateList) {
        if (!name || !amount || !dateList) {
            return {"message": "Please, fill all fields.", "status": false};
        }

        const itemAlreadyExists = await itemModel.findAll({
            raw: true,
            where: {
                Name: name
            }
        });

        if (itemAlreadyExists.length > 0) {
            return {"message": "Item name already exists.", "status": false}
        }

        const itemCreate = await itemModel.create({
            Name: name,
            Amount: amount,
            DateList: dateList
        });

        if (!itemCreate) {
            return {"message": "Unknown error, contact administrator", "status": false}
        }

        return { "message": "Item created successfully" }
    }

    async editItem (id, name, amount) {
        if (!id || !name || !amount) {
            return {"message": "Please, fill all fields.", "status": false};
        }

        const idExists = await itemModel.findAll({
            where: {
                id: id
            }
        });

        if (idExists.length <= 0) {
            return {"message": "Error updating item, please try again.", "status": false};
        }

        const itemEdit = await itemModel.update({
            Name: name,
            Amount: amount,
        },{
            where: {
                id: id
            }
        });

        if (!itemEdit) {
            return {"message": "Unknown error, contact administrator", "status": false}
        }

        return { "message": "Item edited successfully" };
    }

    async deleteItem (id) {
        if (!id) {
            return {"message": "Error deleting item.", "status": false};
        }

        const idExists = await itemModel.findAll({
            where: {
                id: id
            }
        });

        if (idExists.length <= 0) {
            return {"message": "Error deleting item, please try again.", "status": false};
        }

        const itemDelete = await itemModel.destroy({
            where: {
                id: id
            }
        });

        if (!itemDelete) {
            return {"message": "Unknown error, contact administrator", "status": false}
        }

        return { "message": "Item deleted successfully" };
    }

    async getAllItems (dateList) {
        const allItems = await itemModel.findAll({
            raw: true,
            order: [
                ['Name', 'ASC']
            ],
            where: {
                DateList: dateList
            }
        });

        if (allItems.length <= 0){
            return { "message": "No items were found.", "status": false };
        } 

        return { "data": allItems, "status": true };
    }
    
    async getFilterItems (name) {
        if (!name) {
            return { "message": "Fill in the Name field.", "status": false };
        }

        const getItem = await itemModel.findAll({
            raw: true,
            order: [
                ['Name', 'ASC']
            ],
            where: {
                Name: name
            }
        });

        if (getItem.length <= 0) {
            return { "message": "No items were found.", "status": false };
        }

        return { "data": getItem, "status": true };
    }
}

module.exports = ItemService;