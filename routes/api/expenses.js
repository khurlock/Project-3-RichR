const express = require("express");
const router = express.Router();

// @route GET api/expenses/test
// @desc Test expnses route
// @access Public
router.get("/test", (req, res) => {
  return res.json({ msg: "Expenses Works" })
  console.log('test')}
);


module.exports = router;
