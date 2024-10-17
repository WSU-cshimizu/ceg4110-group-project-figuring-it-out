const express = require("express");
const { signUp, login, reset } = require("../controllers/adminController");
const adminRouter = express.Router();

adminRouter.post("/signUp", signUp);
adminRouter.post("/login", login);
adminRouter.post("/reset", reset);

module.exports = adminRouter;
