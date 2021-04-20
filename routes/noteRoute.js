const dataBase = require('../db/db.json');
const fs = require("fs");

module.exports = (app) => {
  
  app.get('/api/notes', (req, res) => res.json(dataBase));

  app.post('/api/notes', (req, res) => {
      dataBase.push(req.body);
      fs.writeFile('./db/db.json', JSON.stringify(dataBase), (error) =>
        error ? console.error(error) : console.log('Save!')
      )
      res.json(true);
  });

  app.get('/api/notes/:id', (req,res) => {
    res.json(dataBase[req.params.id]);
  });

  app.delete('/api/notes/:id', (req,res) => {
    dataBase.splice(req.params.id, 1);
    fs.writeFile('./db/db.json', JSON.stringify(dataBase), (error) =>
        error ? console.error(error) : console.log('Delete!')
    )
    res.json(true);
  });
};  