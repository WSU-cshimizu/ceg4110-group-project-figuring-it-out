const express = require("express");
const { signUp, login, reset } = require("../controllers/adminController");
const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.post("/login", login);
authRouter.post("/reset", reset);
module.exports = authRouter;
