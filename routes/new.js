var express = require("express");
var router = express.Router();

// Render new page
router.get("/", (req, res, next) => {
  res.render("form");
});

router.post("/", (req, res, next) => {
  console.log(req.body.message);
  console.log(req.body.user);
  res.send("message delivered");
});

module.exports = router;
