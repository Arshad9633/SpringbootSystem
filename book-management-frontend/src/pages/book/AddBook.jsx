import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    publisher: ''
  });

  const [genres, setGenres] = useState([]);
  const [publishers, setPublishers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchGenres();
    fetchPublishers();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/genres');
      setGenres(response.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchPublishers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/publishers');
      setPublishers(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8080/api/books', {
        ...book,
        genre: { id: book.genre },
        publisher: { id: book.publisher }
      });
      navigate('/books');
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            id="author"
            placeholder="Enter author's name"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <select
            name="genre"
            className="form-select"
            id="genre"
            value={book.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select a genre</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher</label>
          <select
            name="publisher"
            className="form-select"
            id="publisher"
            value={book.publisher}
            onChange={handleChange}
            required
          >
            <option value="">Select a publisher</option>
            {publishers.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/books" className="btn btn-secondary">Cancel</Link>
          <button type="submit" className="btn btn-primary">Save Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
