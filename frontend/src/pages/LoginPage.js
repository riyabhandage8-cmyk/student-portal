import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    // 🔥 ADMIN CHECK (HARDCODED)
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin");
      return;
    }

    try {
      const res = await API.post("/auth/login", { email, password });

      if (res.data.includes("LOGIN_SUCCESS")) {
        navigate("/application");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>Login</button>

      <p onClick={() => navigate("/signup")}>Go to Signup</p>
    </div>
  );
}

export default LoginPage;

