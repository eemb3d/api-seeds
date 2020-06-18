const { buildSchema } = require('graphql');

module.exports = buildSchema(`

  type Comments {
    user: String!
    message: String!
    dateCreated: String!
    like: Int!
  }

  type Game {
    title: String!
    description: String!
    by: String!
    platform: [String]!
    age_rating: String!
    likes: Int!
    comments: [Comments]!
  }

  type AVGLikeGame {
    title: String!
    average_likes: Int!
  }

  type Report {
    user_with_most_comments: String!
    highest_rated_game: String!
    average_likes_per_game: [AVGLikeGame]!
  }

  type Query {
    getGame(gameId: ID!): Game!
    getReport: Report!
  }

`);
