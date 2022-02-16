const db = require("../db");

class UserRegistryService {
    async addUser(user){ 
        const [registredUser] = await db("users").insert(user).returning("*");
        return registredUser;
    }
    
    async getUserByLogin(login){
        const user = await db("users").where({login}).first();
        return user;
    }
}


module.exports = new UserRegistryService();