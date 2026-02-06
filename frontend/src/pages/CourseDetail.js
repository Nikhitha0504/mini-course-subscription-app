import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoValid, setPromoValid] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch (error) {
        setMessage("Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  // 🔹 Apply Promo Code
  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "BFSALE25") {
      setPromoValid(true);
      setMessage("Promo applied! 50% discount 🎉");
    } else {
      setPromoValid(false);
      setMessage("Invalid promo code");
    }
  };

  const handlePromoKeyDown = (e) => {
    if (e.key === "Enter") {
      applyPromo();
    }
  };

  // 🔹 Subscribe Course
  const subscribeCourse = async () => {
    try {
      setSubscribing(true);

      const payload = { courseId: course._id };

      if (promoValid) {
        payload.promoCode = promoCode;
      }

      await api.post("/subscriptions/subscribe", payload);
      alert("Subscribed successfully 🎉");
      navigate("/my-courses");
    } catch (error) {
  setMessage(
    error.response?.data?.message || "Subscription failed"
  );
}
 finally {
      setSubscribing(false);
    }
  };

  if (loading) {
    return <h4 className="text-center mt-5">Loading course...</h4>;
  }

  if (!course) return null;

  const discountedPrice = course.price / 2;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            {course.image && (
              <img
                src={course.image}
                className="card-img-top"
                alt={course.title}
              />
            )}

            <div className="card-body">
              <h4>{course.title}</h4>

              {/* Course Description */}
              <div className="mt-3">
                <h6 className="fw-bold text-secondary">Course Overview</h6>
                {course.description.split(". ").map((line, index) => (
                  <p key={index} className="text-muted mb-2">
                    {line}.
                  </p>
                ))}
              </div>

              {/* Price Section */}
              {course.price === 0 ? (
                <span className="badge bg-success mb-3">FREE</span>
              ) : (
                <div className="mb-3">
                  {promoValid ? (
                    <p className="fs-5">
                      <del className="text-muted me-2">₹{course.price}</del>
                      <strong className="text-success">
                        ₹{discountedPrice}
                      </strong>
                    </p>
                  ) : (
                    <p className="fs-5 fw-bold">₹{course.price}</p>
                  )}
                </div>
              )}

              {/* Promo Code Section (ONLY FOR PAID COURSES) */}
              {course.price > 0 && (
                <>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    onKeyDown={handlePromoKeyDown}
                  />

                  <button
                    className="btn btn-outline-primary w-100 mb-2"
                    onClick={applyPromo}
                  >
                    Apply Promo
                  </button>
                </>
              )}

              {/* Message */}
              {message && (
                <div className="alert alert-info">{message}</div>
              )}

              {/* Subscribe Button */}
              <button
                className="btn btn-success w-100"
                onClick={subscribeCourse}
                disabled={subscribing}
              >
                {subscribing ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CourseDetail;
