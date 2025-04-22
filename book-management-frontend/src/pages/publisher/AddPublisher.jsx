import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const AddPublisher = () => {
  const [publisher, setPublisher] = useState({
    name: '',
    address: ''
  });

  const navigate = useNavigate();

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
      await axios.post('http://localhost:8080/api/publishers', publisher);
      navigate('/publishers');
    } catch (error) {
      console.error('Error saving publisher:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register New Publisher</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Publisher Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter name"
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
            placeholder="Enter address"
            value={publisher.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/publishers" className="btn btn-secondary">Cancel</Link>
          <button type="submit" className="btn btn-success">Save Publisher</button>
        </div>
      </form>
    </div>
  );
};

export default AddPublisher;
