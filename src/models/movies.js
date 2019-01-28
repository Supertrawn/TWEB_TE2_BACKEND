const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    id: String,
    vote_count: Number,
    video: Boolean,
    vote_average: Number,
    title: String,
    popularity: Number,
    poster_path: String,
    original_language: String,
    original_title: String,
    backdrop_path: String,
    adult: Boolean,
    overview: String,
    release_date: Date,
    tmdb_id: Number,
    genres: [String]
  },
  { versionKey: false }
);

module.exports = mongoose.model('Movie', schema);
