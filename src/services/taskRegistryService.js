const db = require("../db");


class TaskRegistryService{
    async getTasks(userId){
        const tasks = await db("tasks").where({user_id: userId});
        return tasks
    }


    async registerTask(task){
        const [registeredTask] = await db("tasks").insert(task).returning("*");
        return registeredTask;
    }
}


module.exports = new TaskRegistryService();