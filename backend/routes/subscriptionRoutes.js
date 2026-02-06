const express = require("express");
const {
  subscribeToCourse,
  getMyCourses,
} = require("../controllers/subscriptionController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/subscribe", authMiddleware, subscribeToCourse);
router.get("/my-courses", authMiddleware, getMyCourses);

module.exports = router;
