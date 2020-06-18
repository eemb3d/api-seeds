const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GamesReportSchema = new Schema({
  _id: Number,
  user_with_most_comments: { type: String, required: true },
  highest_rated_game: { type: String, required: true },
  average_likes_per_game: [
    {
      title: { type: String, required: true },
      average_likes: { type: Number, required: true }
    }
  ]
}, { id: false, versionKey: false });

module.exports.Report = mongoose.model('Report', GamesReportSchema);
