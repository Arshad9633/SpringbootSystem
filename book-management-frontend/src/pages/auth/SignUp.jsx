import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/signup", user);
      alert("User registered successfully!");
    } catch (error) {
      alert("Sign-up failed!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} className="form-control mb-2" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="form-control mb-2" />
        <button className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}
