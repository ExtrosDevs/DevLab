const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
} = require("../controllers/dataController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.get("/data", authenticateToken, getData);
router.post("/post-data", authenticateToken, postData);

module.exports = router;
