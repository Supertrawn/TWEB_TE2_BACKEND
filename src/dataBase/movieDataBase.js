const Movie = require('../models/movies');
const { DataBase } = require('./database');

class MovieDataBase extends DataBase {
  constructor() {
    super();
    this.getMoviesOffsetLimit = this.getMoviesOffsetLimit.bind(this);
  }

  getMoviesOffsetLimit(offset, lim){
    return Movie.find({}).skip(parseInt(offset)).limit(parseInt(lim));
  }

}

const movieDataBase = new MovieDataBase();
module.exports = movieDataBase;