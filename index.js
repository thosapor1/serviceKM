const express = require("express");
const app = new express();
const sql = require("mssql");

const config = {
  user: "thosapornc",
  password: "thosapornc",
  server: "192.168.10.15",
  database: "EARTH3",
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

sql.connect(config, (err) => {
  if (err) console.log(err);
  const request = new sql.Request();
  const query = `select * from dev_test`;
  request.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
