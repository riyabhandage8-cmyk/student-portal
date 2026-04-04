import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>Student Portal</h2>

        <div className="nav-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </nav>

      {/* MAIN */}
      <div className="hero">
        <h1>Welcome to Student Application Portal</h1>
        <p>Apply easily and track your application status</p>

        <button onClick={() => navigate("/login")}>
          Get Started
        </button>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Student Portal. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default HomePage;