const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/customer', (req, res) => {
  res.send([1, 2, 3]);
});

//  /api/customer/1
app.get('/api/customer/:id', (req, res) => {
  res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
