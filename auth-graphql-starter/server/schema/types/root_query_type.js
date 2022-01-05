const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;  // This is handled by passport automatically, if a user is logged in, there will be a req.user object
      }
    }
  }
});

module.exports = RootQueryType;
