const { RESTDataSource} = require("apollo-datasource-rest")


class GithubService extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://api.github.com";
    }

    async getUser(login){
        const user = await this.get(`/users/${login}`);
        return user;
    }
}


module.exports = new GithubService();