const express = require("express");
const {
  signupController,
  signinController,
  currentUserController
} = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware")

const router = express.Router();

//routes
//SIGNUP || POST
router.post("/signup", signupController);

//LOGIN || POST
router.post("/login", signinController);

//GET CURRENT USER || GET
router.get("/me", authMiddleware, currentUserController);

module.exports = router;
