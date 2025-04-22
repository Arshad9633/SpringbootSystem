import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Admin Panel - User List</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Password (Encrypted)</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>{user.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
