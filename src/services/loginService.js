const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtToken = '97555587495e88cacbf710e1c8196000';

class LoginService {

    async AuthenticatedUser(user, password) {
        if (!user || !password) {
            return { "message": "Please, fill in all fields.", "status": false };
        }

        const getUser = await userModel.findAll({
            raw: true,
            where: {
                User: user
            }
        })

        if (getUser.length <= 0){
            return { "message": "User/Password incorrect, try again.", "status": false };
        }

        const passwordMatch = await bcrypt.compare(password, getUser[0].Password);
        
        if (!passwordMatch) {
            return { "message": "User/Password incorrect, try again.", "status": false };
        }


        const token = jwt.sign({
            user: getUser.user
        }, 
        jwtToken,
        {
            expiresIn: '1d'
        });
    
        return { "token": token, "status": true };
        
    }
}

module.exports = LoginService;