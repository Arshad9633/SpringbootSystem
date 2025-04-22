import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PublisherList = () => {
  const [publishers, setPublishers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPublishers();
  }, []);

  const fetchPublishers = async () => {
    try {
      const response = await axios.get('http://spring-backend:8080/api/publishers');
      setPublishers(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  const deletePublisher = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this publisher?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://spring-backend:8080/api/publishers/${id}`);
      fetchPublishers(); // Refresh list
    } catch (error) {
      console.error('Error deleting publisher:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Publisher List</h2>

      <Link to="/add-publisher" className="btn btn-success mb-3">Add New Publisher</Link>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th style={{ width: '200px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {publishers.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No publishers found.</td>
            </tr>
          ) : (
            publishers.map((publisher) => (
              <tr key={publisher.id}>
                <td>{publisher.id}</td>
                <td>{publisher.name}</td>
                <td>{publisher.address}</td>
                <td>
                  <Link to={`/edit-publisher/${publisher.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletePublisher(publisher.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="mt-3">
        <Link to="/books" className="btn btn-secondary">Back to Book List</Link>
      </div>
    </div>
  );
};

export default PublisherList;
