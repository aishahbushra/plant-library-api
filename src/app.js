const express = require('express');
const plantController = require('./controllers/plant');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("WELCOME TO THE PLANT API!")
})

app.post('/plant', plantController.create);

app.get('/plant', plantController.list);

app.patch('/plant/:id', plantController.updateById);

app.delete('/plant/:plantId', plantController.deleteById);

module.exports = app;