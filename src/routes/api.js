// ./src/routes/api.js

const express = require('express');
const router = express.Router();
const movieDataBase = require('../dataBase/movieDataBase');


//localhost:5000/movies?limit=20&offset=100
router.get('/movies', (req, res) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
    console.log(limit + " - " + offset);
    movieDataBase.getMoviesOffsetLimit(offset, limit).then(movieResult => {
    res.send({ movieResult });
    })
    .catch(err => {
        console.log(err);
    });
  });

router.get('/', (req, res) => {
  res.send({ message: 'hello' });
});

// Do not forget
module.exports = router;
