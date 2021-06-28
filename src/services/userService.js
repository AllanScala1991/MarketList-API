const userModel = require('../models/userModel');
const crypt = require('bcryptjs');

class UserService {

    async createUser(user, password, email) {
        if (!user || !password || !email){
            return {"message": "Please, fill all fields.", "status": false};
        }

        const userAlreadyExists = await userModel.findAll({
            raw: true,
            where: {
                User: user
            }
        })

        if (userAlreadyExists.length > 0) {
            return {"message": "User already exists.", "status": false}
        }

        const passwordHash = await crypt.hash(password, 8);

        const userCreate = await userModel.create({
            User: user,
            Password: passwordHash,
            Email: email
        });

        if (!userCreate){
            return {"message": "Unknown error, contact administrator", "status": false}
        }

        return { "message": "User created successfully" };
    }
}

module.exports = UserService;

