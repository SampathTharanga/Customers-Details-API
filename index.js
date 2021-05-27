const express = require('express');
const app = express();
const port = 3000;

console.log(`Hello Node.js v${process.versions.node}!`);

app.listen(port, () => {
  console.log(
    `Custoemrs Details Appliction listening at http://localhost:${port}`
  );
});
