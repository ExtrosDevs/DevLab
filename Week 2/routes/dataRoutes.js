const express = require("express");
const router = express.Router();
const {
  getData,
  postData,
  getDummy,
} = require("../controllers/dataController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.get("/test", getDummy);
router.get("/data", authenticateToken, getData);
router.post("/post-data", authenticateToken, postData);

module.exports = router;
