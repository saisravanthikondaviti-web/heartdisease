import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("registeredUser", JSON.stringify({ email, password }));
    alert("Signup successful!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
      <p>Already have account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Signup;