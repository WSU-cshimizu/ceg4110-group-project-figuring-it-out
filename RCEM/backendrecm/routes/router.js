const express = require("express");
const adminRouter = require("./admin.router");
const router = express.Router();

router.all("/", (req, res) => {
  res.send(" Hello !!");
});

router.use("/auth", adminRouter);

module.exports = router;
