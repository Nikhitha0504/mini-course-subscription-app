import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get("/courses");
        setCourses(res.data);
      } catch (error) {
        console.error("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <h4 className="text-center mt-5 text-primary">
        Loading awesome courses 🚀
      </h4>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold text-gradient">
        Black Friday Courses 
      </h2>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4 mb-4" key={course._id}>
            <div className="card course-card h-100 shadow-sm">
              <img
                src={course.image}
                className="card-img-top course-img"
                alt={course.title}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{course.title}</h5>
                

                <p className="card-text text-muted">
  {course.shortDescription}
</p>


                <span
                  className={`badge mb-3 ${
                    course.price === 0
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {course.price === 0
                    ? "FREE COURSE"
                    : `₹${course.price}`}
                </span>

                <Link
                  to={`/course/${course._id}`}
                  className="btn btn-dark mt-auto"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
