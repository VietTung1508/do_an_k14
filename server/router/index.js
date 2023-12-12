const authRoute = require("./auth.js");

const router = (app) => {
  app.use("/auth", authRoute);
};

module.exports = router;
