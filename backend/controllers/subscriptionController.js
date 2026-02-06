const Course = require("../models/Course");
const Subscription = require("../models/Subscription");

// Subscribe
exports.subscribeToCourse = async (req, res) => {
  try {
    const { courseId, promoCode } = req.body;
    const userId = req.user.userId; // ✅ KEEP THIS

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const alreadySubscribed = await Subscription.findOne({ userId, courseId });
    if (alreadySubscribed) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    let finalPrice = course.price;

    if (course.price !== 0) {
      if (promoCode !== "BFSALE25") {
        return res.status(400).json({ message: "Invalid promo code" });
      }
      finalPrice = course.price / 2;
    }

    const subscription = await Subscription.create({
      userId,
      courseId,
      pricePaid: finalPrice,
    });

    res.status(201).json({
      message: "Subscribed successfully 🎉",
      subscription,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ FIX HERE
exports.getMyCourses = async (req, res) => {
  try {
    const userId = req.user.userId; // 🔥 FIXED

    const subscriptions = await Subscription.find({ userId })
      .populate("courseId");

    res.status(200).json(subscriptions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch courses" });
  }
};
