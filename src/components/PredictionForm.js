import React, { useState } from "react";
import ResultCard from "./ResultCard";

const API_URL = "https://lumpiest-karis-biochemically.ngrok-free.dev/predict";

function PredictionForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    thalach: "",
    exang: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        age: Number(formData.age),
        sex: Number(formData.sex),
        cp: Number(formData.cp),
        trestbps: Number(formData.trestbps),
        chol: Number(formData.chol),
        thalach: Number(formData.thalach),
        exang: Number(formData.exang)
      })
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">

        <input name="name" placeholder="Patient Name" onChange={handleChange} required />
        <input name="age" placeholder="Age" onChange={handleChange} required />
        <input name="sex" placeholder="Sex (0=Female,1=Male)" onChange={handleChange} required />
        <input name="cp" placeholder="Chest Pain Type (0-3)" onChange={handleChange} required />
        <input name="trestbps" placeholder="Resting BP" onChange={handleChange} required />
        <input name="chol" placeholder="Cholesterol" onChange={handleChange} required />
        <input name="thalach" placeholder="Max Heart Rate" onChange={handleChange} required />
        <input name="exang" placeholder="Exercise Angina (0/1)" onChange={handleChange} required />

        <button type="submit">Predict</button>
      </form>

      {result && <ResultCard result={result} name={formData.name} />}
    </div>
  );
}

export default PredictionForm;