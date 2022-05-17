const express = require("express");
const rewardRouter = require("./reward.distribution");
const router = express.Router();

// to check server
router.get("/", (req, res) => {
  res.send("Server is running!");
});

// routes for reward

router.use("/reward", rewardRouter);

module.exports = router;
