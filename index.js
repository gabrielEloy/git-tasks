const { ApolloServer } = require("apollo-server");
const { resolvers, typeDefs } = require('./src/graphql/index');
const GithubService = require("./src/services/githubService");
const UserRegistryService = require("./src/services/userRegistryService");
const TaskRegistryService = require("./src/services/taskRegistryService");


const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => ({
        githubService: GithubService,
        userRegistryService: UserRegistryService,
        taskRegistryService: TaskRegistryService
    })
});


server.listen();

