const express = require("express");
const { signUp, login} = require("../controllers/adminController");
const adminRouter = express.Router();

adminRouter.post("/signUp", signUp);
adminRouter.post("/login", login);



module.exports = adminRouter;
