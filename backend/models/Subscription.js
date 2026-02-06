const Subscription = require("../models/Subscription");

// GET MY COURSES
exports.getMyCourses = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({
      userId: req.user.userId, // ✅ FIXED
    }).populate("courseId");

    const myCourses = subscriptions.map((sub) => ({
      _id: sub.courseId._id,
      title: sub.courseId.title,
      image: sub.courseId.image,
      pricePaid: sub.pricePaid,
      subscribedAt: sub.subscribedAt,
    }));

    res.status(200).json(myCourses);
  } catch (error) {
    console.error("MyCourses error:", error);
    res.status(500).json({
      message: "Failed to fetch subscribed courses",
    });
  }
};
