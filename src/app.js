const express = require('express');
// const readerRouter = require('./routes/reader');
const plantRouter = require('./routes/plant');

const app = express();

app.use(express.json());

// app.use('/readers', readerRouter);

app.use('/plants', plantRouter);

module.exports = app;