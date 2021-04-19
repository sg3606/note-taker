const dataBase = require('./db/db');

module.exports = (app) => {
  
  app.get('/api/notes', (req, res) => res.json(dataBase));

  app.post('/api/notes', (req, res) => {
      dataBase.push(req.body);
      res.json(true);
  });
//   app.post('/api/clear', (req, res) => {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   })
};
  