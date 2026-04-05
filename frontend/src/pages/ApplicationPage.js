import { useState } from "react";
import API from "../api";
import "./ApplicationPage.css";

function ApplicationPage() {
  const [form, setForm] = useState({
    fullName: "",
    studentId: "",
    course: "",
    dob: "",
    phone: "",
    reason: "",
  });

  const handleSubmit = async () => {
    try {
      await API.post("/applications", form);
      alert("Application Submitted");
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
    }
  };

  return (
    <div className="form-container">
      <h2>Application Form</h2>

      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
      />

      <input
        placeholder="Student ID"
        onChange={(e) => setForm({ ...form, studentId: e.target.value })}
      />

      <select onChange={(e) => setForm({ ...form, course: e.target.value })}>
        <option value="">Select Course</option>
        <option>Engineering</option>
        <option>MBA</option>
        <option>Science</option>
      </select>

      <input
        type="date"
        onChange={(e) => setForm({ ...form, dob: e.target.value })}
      />

      <input
        placeholder="Phone Number"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Reason for Application"
        onChange={(e) => setForm({ ...form, reason: e.target.value })}
      />

      <button onClick={handleSubmit}>Submit Application</button>
    </div>
  );
}

export default ApplicationPage;