const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/messages', { useNewUrlParser: true, useUnifiedTopology: true });

const messagesRoute = require('./routes/messages');

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use('/', messagesRoute);

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`);
});
