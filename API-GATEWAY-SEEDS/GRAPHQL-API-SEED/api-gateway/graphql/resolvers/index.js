const mutation = require('./mutation');
const query = require('./query');

const resolvers = { ...mutation, ...query };

module.exports = resolvers;
