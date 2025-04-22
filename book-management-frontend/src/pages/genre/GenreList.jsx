import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GenreList = () => {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/genres');
      setGenres(response.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const deleteGenre = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this genre?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/api/genres/${id}`);
      fetchGenres(); // Refresh list
    } catch (error) {
      console.error('Error deleting genre:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Genre List</h2>

      <div className="text-end mb-3">
        <Link to="/add-genre" className="btn btn-success">Add New Genre</Link>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Genre Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {genres.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No genres found.</td>
            </tr>
          ) : (
            genres.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.id}</td>
                <td>{genre.name}</td>
                <td>
                  <Link to={`/edit-genre/${genre.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button
                    onClick={() => deleteGenre(genre.id)}
                    className="btn btn-sm btn-danger"
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

export default GenreList;
