const listModel = require('../models/listModel');


class ListService {

    async createList (listDate) {

        if(!listDate) {
            return {"message": "Please, inform the date.", "status": false};
        }

        const listAlreadyExists = await listModel.findAll({
            raw: true,
            where: {
                ListDate: listDate
            }
        })

        if (listAlreadyExists.length > 0) {
            return {"message": "Date already exists.", "status": false}
        }

        const listCreate = await listModel.create({
            ListDate: listDate
        });

        if (!listCreate){
            return {"message": "Unknown error, contact administrator", "status": false}
        }

        return {"data": listCreate, "status": true};
    }

    async deleteList (id) {

        if (!id) {
            return {"message": "Please, try again."};
        }

        const IDExists = await listModel.findAll({
            where: {
                id: id
            }
        })

        if(!IDExists){
            return {"message": "Date not found"};
        }

        const IDDelete = await listModel.destroy({
            where: {
                id: id
            }
        })

        if (!IDDelete) {
            return {"message": "Unknown error, contact administrator"}
        }

        return {"message": "Date deleted successfully."};
    }

    async allList () {
        const itemsGet = await listModel.findAll({
            raw: true,
            order: [
                ['createdAt', 'DESC']
            ]
        })

        if (itemsGet.length <= 0) {
            return {"message": "No dates found", "status": false}
        }

        return {"data": itemsGet, "status": true};
    }


}

module.exports = ListService;