/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const GameInfoSchema = new Schema(
  {
    _id: Number,
    title: { type: String, required: true },
    description: { type: String, required: true },
    by: { type: String, required: true },
    platform: [],
    age_rating: { type: String, required: true },
    likes: { type: Number, required: true },
    comments: [
      {
        user: { type: String, required: true },
        message: { type: String, required: true },
        dateCreated: {
          type: String,
          default: Date.now,
          get: d => moment.unix(d).utc().format('YYYY-MM-DD')
        },
        like: { type: Number, required: true }
      }
    ]
  },
  {
    toJSON: { getters: true, virtuals: false },
    id: false,
    versionKey: false
  });

/*
function dateFormatted(dateCreated) {
  return moment.unix(d).utc().format('YYYY-MM-DD');
}
*/

module.exports.Games = mongoose.model('Games', GameInfoSchema);
