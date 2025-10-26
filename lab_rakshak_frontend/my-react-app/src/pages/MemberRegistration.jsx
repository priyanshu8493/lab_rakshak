import React, { useState } from "react";
import "./MemberRegistration.css";

function MemberRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    enrollmentNo: "",
    year: "",
    department: "",
    secRollNo: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Member Registered Successfully!");
    setFormData({
      name: "",
      enrollmentNo: "",
      year: "",
      department: "",
      secRollNo: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="member-page">
      <div className="form-section">
        <h2>Member Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="enrollmentNo" placeholder="Enrollment No." value={formData.enrollmentNo} onChange={handleChange} required />
          <input type="text" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required />
          <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          <input type="text" name="secRollNo" placeholder="Sec Roll No." value={formData.secRollNo} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
      </div>

      <div className="text-section">
        <h1 className="animated-title">Welcome to IIC Lab</h1>
        <p className="description">
          Empowering innovation, research, and collaboration.<br />
          Register as a member and be part of groundbreaking ideas.
        </p>
      </div>
    </div>
  );
}

export default MemberRegistration;
