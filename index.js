const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/customer', (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000), () => console.log('Listening on port 3000...');
