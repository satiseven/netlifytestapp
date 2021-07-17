const express = require("express");
const serverless = require("serverless-http");
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();
router.get("/", (req, res) => {
  res.json({
    path: "Home",
    firstName: "Riza",
    lastName: "Gholi zade",
  });
});
router.get("/json", (req, res) => {
  res.json({
    path: "json",
    author: "bibek",
  });
});
app.use("/", router);
//app.listen(port, () => console.log(`runnig at port ${port}`));
module.exports.handler = serverless(app);
