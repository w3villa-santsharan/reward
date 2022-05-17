
// calculate reward 
exports.calculateReward = (amount) => {
  if (amount <= 50) {
    return 0;
  } else if (50 < amount && amount <= 100) {
    return amount - 50;
  } else {
    return amount - 50 + (amount - 100);
  }
};
