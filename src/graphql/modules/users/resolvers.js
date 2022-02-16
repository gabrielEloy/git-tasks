module.exports = {
    User: {
        tasks: async (user, _,{ dataSources }) => {
            const tasks = await dataSources.taskRegistryService.getTasks(user.id);

            return tasks;
        }
    },
    Query: {
        user: async (_, { login }, { dataSources }) => {
            const dbUser = await dataSources.userRegistryService.getUserByLogin(login);


            if(dbUser){
                return dbUser;
            } 

            const githubUser = await dataSources.githubService.getUser(login);

            const newUser = await dataSources.userRegistryService.addUser({
                login: githubUser.login,
                avatar_url: githubUser.avatar_url
            });

            return newUser;
        }
    }
}