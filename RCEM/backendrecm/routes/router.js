const express = require("express");
const authRouter = require("./auth.router");
const adminRouter = require("./admin.router");
const router = express.Router();

router.all("/", (req, res) => {
  res.send(" Hello !!");
});

router.use("/auth", authRouter);
router.use("/admin", adminRouter);

module.exports = router;
