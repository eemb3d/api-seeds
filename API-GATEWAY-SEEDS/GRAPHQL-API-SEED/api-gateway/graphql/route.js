const graphqlHTTP = require('express-graphql');

const { errorsHelper, envHelper } = require('../helpers');
const schema = require('./schema/schema');

// Resolver function for each endpoints
const resolvers = require('./resolvers');

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    customFormatErrorFn: errorsHelper.formatGraphQLErrors,
    graphiql: envHelper.env('NODE_ENV') === 'development'
});
