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
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, []);

  if (loading) {
    return <h4 className="text-center mt-5">Loading your courses...</h4>;
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
      <h2 className="text-center mb-4 fw-bold">My Courses</h2>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course._id}>
            <div className="card shadow-sm h-100">
              {course.image && (
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}

              <div className="card-body">
                <h5 className="card-title fw-bold">
                  {course.title}   {/* ✅ TITLE FIX */}
                </h5>

                <span className="badge bg-success mb-2">
                  {course.pricePaid === 0 ? "FREE" : `₹${course.pricePaid}`}
                </span>

                <p className="text-muted mt-2">
                  Subscribed on{" "}
                  {new Date(course.subscribedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
