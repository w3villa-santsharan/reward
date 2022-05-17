const app = require("./src/app");

// define port
const PORT = process.env.PORT || 8000;


// start server 
const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});

module.exports = server;