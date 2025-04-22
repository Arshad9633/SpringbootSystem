import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const EditPublisher = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [publisher, setPublisher] = useState({
    name: '',
    address: ''
  });

  useEffect(() => {
    fetchPublisher();
  }, []);

  const fetchPublisher = async () => {
    try {
      const response = await axios.get(`http://spring-backend:8080/api/publishers/${id}`);
      setPublisher(response.data);
    } catch (error) {
      console.error('Error fetching publisher:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPublisher(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://spring-backend:8080/api/publishers/${id}`, publisher);
      navigate('/publishers');
    } catch (error) {
      console.error('Error updating publisher:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Edit Publisher</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Publisher Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={publisher.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            value={publisher.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/publishers" className="btn btn-secondary">Cancel</Link>
          <button type="submit" className="btn btn-primary">Update Publisher</button>
        </div>
      </form>
    </div>
  );
};

export default EditPublisher;
