const express = require('express')
const app = express()
const port =3000

console.log(`Hello Node.js v${process.versions.node}!`);


app.listen(port, ()=> {
  console.log(1`Custoemrs Details Appliction listening at http://localhost:${port}`)
})