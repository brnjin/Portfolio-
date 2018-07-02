const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
let app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.send(path.resolve(__dirname, '/index.html'))
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });