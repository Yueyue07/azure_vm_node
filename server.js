const express = require('express');
const app = module.exports = exports = express();
app.get('/', (req, res) => {
  res.send('Hellow World');
});

app.listen(3000, () => {
  console.log('server up');
});
