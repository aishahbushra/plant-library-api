const express = require('express');
const plantController = require('./controllers/plant');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

app.post('/plant', plantController.create);

app.get('/plant', plantController.list);

app.patch('/plant/:id', plantController.updateById);

app.delete('/plant/:plantId', plantController.deleteById);

module.exports = app;