const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

const customers = [
  { id: 1, name: 'Sampath' },
  { id: 2, name: 'Tharanga' },
  { id: 3, name: 'Kumara' }
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/customer', (req, res) => {
  res.send(customers);
});

//  /api/customer/1
app.get('/api/customer/:id', (req, res) => {
  var customer = customers.find(c => c.id === parseInt(req.params.id));
  if (!customer)
    res.status(404).send('The Customer with the given ID was not found.');
  res.send(customers);
});

/*
app.get('/api/posts/:year/:month', (req, res) => {
  //res.send(req.params);  //  /api/posts/2018/5
  res.send(req.query); //  /api/posts/2018/5?sortBy=name
});
*/    

app.post('/api/customers', (req, res) => {
  
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  })

  const result = schema.validate(req.body)
  console.log(result)

if(result.error) {
  //400 Bad Request
  res.status(400).send(result.error.details[0].message)
}
 
 /*
  if(!req.body.name || req.body.name.length < 3) {
    //400 Bad Request
    res.status(400).send('Name is required and should be minimum 3 characters.')
    return
  }
*/

  const customer = {
    id: customers.length + 1,
    name: req.body.name
  };
  customers.push(customer);
  res.send(customer);
});

//PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
