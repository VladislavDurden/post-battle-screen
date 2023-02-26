const express = require('express');
const router = express.Router();

const gameData = require('../db/game.json');

router.get('/game', (req, res, next) => {
  if(!gameData){
    res.status(500).send('Something went wrong');
  }

  res.status(200).send(gameData);
});

module.exports = router;
