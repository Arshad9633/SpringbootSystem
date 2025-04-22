import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const AddGenre = () => {
  const [genreName, setGenreName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!genreName.trim()) return;

    try {
      await axios.post('http://spring-backend:8080/api/genres', {
        name: genreName
      });
      navigate('/genres');
    } catch (error) {
      console.error('Error adding genre:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Add New Genre</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Genre Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter genre name"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/genres" className="btn btn-secondary">Cancel</Link>
          <button type="submit" className="btn btn-success">Add Genre</button>
        </div>
      </form>
    </div>
  );
};

export default AddGenre;
