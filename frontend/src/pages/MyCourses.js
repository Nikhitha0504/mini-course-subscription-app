import { useEffect, useState } from "react";
import api from "../services/api";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const res = await api.get("/subscriptions/my-courses");
        setCourses(res.data);
      } catch (error) {
        console.error("Failed to fetch my courses");
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, []);

  if (loading) {
    return (
      <h4 className="text-center mt-5 text-primary">
        Loading your courses...
      </h4>
    );
  }

  if (courses.length === 0) {
    return (
      <h4 className="text-center mt-5">
        You have not subscribed to any courses yet.
      </h4>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold text-gradient">
        My Courses
      </h2>

      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card course-card h-100 shadow-sm">
              <div className="course-img-wrapper">
                <img
                  src={course.courseImage}
                  className="course-img"
                  alt={course.courseTitle}
                />
              </div>

              <div className="card-body d-flex flex-column">
  <h5 className="card-title fw-bold">
    {course.courseTitle}
  </h5>

  <span
    className={`badge mb-2 ${
      course.pricePaid === 0 ? "bg-success" : "bg-primary"
    }`}
  >
    {course.pricePaid === 0
      ? "FREE"
      : `Paid ₹${course.pricePaid}`}
  </span>

  <small className="text-muted mt-auto">
    Subscribed on{" "}
    {new Date(course.subscribedAt).toLocaleDateString()}
  </small>
</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
