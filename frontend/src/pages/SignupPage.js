import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./LoginPage.css";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    await API.post("/auth/signup", { name, email, password });
    alert("Signup Successful");
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupPage;

