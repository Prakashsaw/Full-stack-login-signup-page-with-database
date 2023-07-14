const express = require("express");
const { registerUser, loginUser, findUser, getUser } = require("../Controllers/userController");

const userRoute = express.Router();

//route for register api, login api, finding one user details and all users in object form
userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);
userRoute.get("/find/:userId", findUser);
userRoute.get("/", getUser);


module.exports = userRoute;