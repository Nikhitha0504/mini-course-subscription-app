import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // 🔥 CLEAR JWT
    navigate("/login");               // 🔁 Redirect
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand">Mini Course App</span>

      <button className="btn btn-outline-light" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
