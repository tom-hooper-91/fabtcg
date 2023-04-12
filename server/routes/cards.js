const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

module.exports = router;