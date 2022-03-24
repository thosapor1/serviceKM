const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send("hello, express");
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
