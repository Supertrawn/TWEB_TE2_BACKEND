
// loads environment variables
if (process.env.NODE_MODE !== 'production') {
    require('dotenv').config({
        path: `${__dirname}/.env`
    });
}
const express = require('express');
const cors = require('cors');

const api = require('./src/routes/api');

const app = express();

const { db } = require('./src/dataBase/database');
const { port } = require('./config');

app.use(cors());
app.use(express.json());

app.use('/', api);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Upps something went wrong');
});

app.listen(port, () => {
  //connection to db
  db.connect();
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = {
  app,
  port
};
