const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log(`Hello Node.js v${process.versions.node}!`);

app.listen(3000), () => console.log('Listening on port 3000...');
