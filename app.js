const express = require('express');
const productRoutes = require('./Router/products');
const userRoutes = require('./Router/users');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to our API! Available routes: /products and /users');
});

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  res.status(404).send("Sorry, that route doesn't exist.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(4000,()=>{

        console.log(`Server running at http://localhost:4000`);

})