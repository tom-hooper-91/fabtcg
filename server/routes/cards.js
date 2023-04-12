axios = require("axios");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  axios.get('https://the-fab-cube.github.io/flesh-and-blood-cards/json/english/card.json')
  .then(response => {
    const rawCards = response.data;
    res.json(rawCards)
  });
});

module.exports = router;