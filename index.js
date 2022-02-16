const { ApolloServer } = require("apollo-server");
const { resolvers, typeDefs } = require('./src/graphql/index');
const GithubService = require("./src/services/githubService");
const UserRegistryService = require("./src/services/userRegistryService");


const server = new ApolloServer({
    resolvers,
    typeDefs,
    dataSources: () => ({
        githubService: GithubService,
        userRegistryService: UserRegistryService
    })
});


server.listen();

