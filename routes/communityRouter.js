const express = require("express");
const { communityController } = require("../controllers/communityController");

const router = express.Router();

//routes
router.post("/community", communityController());

module.exports = router;
