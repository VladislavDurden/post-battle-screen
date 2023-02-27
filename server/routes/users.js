const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('all users');
});

router.get('/:id', (req, res) => {
  res.status(200).send('user info');
});

router.put('/:id/invite', (req, res, next) => {
  const userId = req.params.name;

  const inviteData = {
    id: req.body.id,
    status: 'pending'
  };

  // write to DB to user[userId] into field[frinds] data - inviteData

  setTimeout(() => {
    res.status(200).send(`Invite has been sent to user ${userId}`);
  }, 1000);
});

module.exports = router;
