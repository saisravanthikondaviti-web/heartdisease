import React from "react";
import { Navigate } from "react-router-dom";
import PredictionForm from "../components/PredictionForm";
import "../App.css";

function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  // Protect route
  if (!user) {
    return <Navigate to="/" replace />;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="app-container">
      <div className="navbar">
        <h3>Welcome, {user.email}</h3>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <PredictionForm />
    </div>
  );
}

export default Dashboard;