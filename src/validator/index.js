const JoiBase = require("joi");
const JoiDate = require("@hapi/joi-date");

const Joi = JoiBase.extend(JoiDate);


// create validator for amount field
const calculateRewardValidator = Joi.object({
  amount: Joi.number().required(),
});

module.exports = {
  calculateRewardValidator,
};
