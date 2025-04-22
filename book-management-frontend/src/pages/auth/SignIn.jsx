import React, { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/signin", user);
      alert(response.data);
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} className="form-control mb-2" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} className="form-control mb-2" />
        <button className="btn btn-success">Sign In</button>
      </form>
    </div>
  );
}
