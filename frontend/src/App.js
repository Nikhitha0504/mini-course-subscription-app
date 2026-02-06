import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Navbar will be shown on all pages */}
      <Navbar />

      <Routes>
        {/* Login page (public) */}
        <Route path="/" element={<Login />} />

        {/* Home (protected) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Course Detail (protected) */}
        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetail />
            </ProtectedRoute>
          }
        />

        {/* My Courses (protected) */}
        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
