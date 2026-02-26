import React from "react";

function ResultCard({ result, name }) {
  const isHighRisk = result.risk_level === "High Risk";

  return (
    <div className={`result-card ${isHighRisk ? "high" : "low"}`}>
      <h2>Patient: {name}</h2>
      <p><strong>Prediction:</strong> {result.prediction}</p>
      <p><strong>Risk Level:</strong> {result.risk_level}</p>
      <p><strong>Disease Type:</strong> {result.disease_type}</p>

      <h3>Precautions:</h3>
      <ul>
        {result.precautions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;