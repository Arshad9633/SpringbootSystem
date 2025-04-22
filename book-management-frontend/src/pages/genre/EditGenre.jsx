import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const EditGenre = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [genreName, setGenreName] = useState('');

  useEffect(() => {
    fetchGenre();
  }, []);

  const fetchGenre = async () => {
    try {
      const response = await axios.get(`http://spring-backend:8080/api/genres/${id}`);
      setGenreName(response.data.name);
    } catch (error) {
      console.error('Error fetching genre:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://spring-backend:8080/api/genres/${id}`, {
        id,
        name: genreName
      });
      navigate('/genres');
    } catch (error) {
      console.error('Error updating genre:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Edit Genre</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Genre Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={genreName}
            onChange={(e) => setGenreName(e.target.value)}
            placeholder="Enter genre name"
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/genres" className="btn btn-secondary">Cancel</Link>
          <button type="submit" className="btn btn-primary">Update Genre</button>
        </div>
      </form>
    </div>
  );
};

export default EditGenre;
