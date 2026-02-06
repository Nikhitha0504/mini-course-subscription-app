// const Course = require("../models/Course");
// const Subscription = require("../models/Subscription");
const Course = require("../models/Course");
const SubscriptionModel = require("../models/Subscription");


// ✅ Subscribe to course
exports.subscribeToCourse = async (req, res) => {
  try {
    const { courseId, promoCode } = req.body;
    const userId = req.user.userId; // ✅ correct

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const alreadySubscribed = await SubscriptionModel.findOne({
      userId,
      courseId,
    });

    if (alreadySubscribed) {
      return res
        .status(400)
        .json({ message: "Already subscribed to this course" });
    }

    let finalPrice = course.price;

    if (course.price !== 0) {
      if (promoCode !== "BFSALE25") {
        return res.status(400).json({ message: "Invalid promo code" });
      }
      finalPrice = course.price / 2;
    }

    const subscription = await SubscriptionModel.create({
      userId,
      courseId,
      pricePaid: finalPrice,
    });

    res.status(201).json({
      message: "Subscribed successfully",
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get my courses (FIXED)
exports.getMyCourses = async (req, res) => {
  try {
    const userId = req.user.userId; // ✅ FIX HERE

    const subscriptions = await SubscriptionModel.find({ userId })
      .populate("courseId");

    const myCourses = subscriptions.map((sub) => ({
      _id: sub.courseId._id,
      title: sub.courseId.title,        // ✅ TITLE
      image: sub.courseId.image,        // ✅ IMAGE
      pricePaid: sub.pricePaid,
      subscribedAt: sub.createdAt,
    }));

    res.status(200).json(myCourses);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch subscribed courses",
    });
  }
};
