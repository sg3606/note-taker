const dataBase = require('../db/db.json');
const fs = require("fs");

module.exports = (app) => {
  
  app.get('/api/notes', (req, res) => res.json(dataBase));

  app.post('/api/notes', (req, res) => {
        let id = (dataBase.length).toString();
        dataBase.push({...req.body,id});
        fs.writeFile('./db/db.json', JSON.stringify(dataBase), (error) =>
        error ? console.error(error) : console.log('Save!')
        )
        res.json(dataBase);
  });

  app.delete('/api/notes/:id', (req,res) => {
        dataBase.splice(req.params.id, 1);
        // console.log((dataBase.length).toString())
        // console.log(req.params.id)
        for (let i = 0; i < (dataBase.length).toString(); i++) {
            if (dataBase[i]['id'] > req.params.id) {
                dataBase[i]['id'] = (dataBase[i]['id']-1).toString();
            }
        }
        // console.log(dataBase)
        fs.writeFile('./db/db.json', JSON.stringify(dataBase), (error) =>
            error ? console.error(error) : console.log('Delete!')
        )
        res.json(dataBase);
  });
};  