const RewardServices = require("../services/RewardService");
const { calculateRewardValidator } = require("../validator");
const { AppError } = require("../helpers/error");

// controller that handles req and send res

exports.calcualteReward = async (req, res, next) => {
  try {
    const { value, error } = calculateRewardValidator.validate(req.params);

    if (error) {
      const errorMessages = error.details.map((el) => el.message);
      throw new AppError(400, errorMessages);
    }
    const reward = RewardServices.calculateReward(value.amount);

    res.status(200).json({
      success: true,
      message: "Reward is calculated",
      reward: reward,
    });
  } catch (error) {
    next(error);
  }
};
