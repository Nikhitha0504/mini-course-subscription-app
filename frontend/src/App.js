import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import MyCourses from "./pages/MyCourses";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      {/* Navbar will be shown on all pages */}
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
<Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/course/:id"
          element={
            <ProtectedRoute>
              <CourseDetail />
            </ProtectedRoute>
          }
        />

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
