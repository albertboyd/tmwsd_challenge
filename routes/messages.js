var express = require('express');
var router = express.Router();
const Message = require('../models/message');

router.get('/', async (req, res) => {
  const messages = await Message.find({});
  res.render('messages/index', { messages });
});

router.get('/new', (req, res) => {
  res.render('messages/form');
});

router.post('/new', async (req, res) => {
  const { content } = req.body;
  const message = new Message({ content });
  await message.save();
  res.redirect('/');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const message = await Message.findById(id);
  if (message) {
    await message.remove();
    res.render('messages/show', { message });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
