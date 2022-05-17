const express = require("express");
const router = express.Router();

const RewardController = require("../../controllers/RewardController");

// path : "/calculate/:amount"
// method : "GET"
// access : "Public"
router.get("/calculate/:amount", RewardController.calcualteReward);

module.exports = router;
