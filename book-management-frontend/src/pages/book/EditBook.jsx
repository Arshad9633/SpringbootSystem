import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const { id } = useParams(); // Get book ID from URL
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    publisher: ''
  });

  const [genres, setGenres] = useState([]);
  const [publishers, setPublishers] = useState([]);

  useEffect(() => {
    fetchBook();
    fetchGenres();
    fetchPublishers();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://spring-backend:8080/api/books/${id}`);
      const fetchedBook = response.data;
      setBook({
        title: fetchedBook.title,
        author: fetchedBook.author,
        genre: fetchedBook.genre?.id || '',
        publisher: fetchedBook.publisher?.id || ''
      });
    } catch (error) {
      console.error('Error fetching book:', error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await axios.get('http://spring-backend:8080/api/genres');
      setGenres(response.data);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const fetchPublishers = async () => {
    try {
      const response = await axios.get('http://spring-backend:8080/api/publishers');
      setPublishers(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://spring-backend:8080/api/books/${id}`, {
        ...book,
        genre: { id: book.genre },
        publisher: { id: book.publisher }
      });
      navigate('/books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Edit Book</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            value={book.title}
            onChange={handleChange}
            placeholder="Enter book title"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
            value={book.author}
            onChange={handleChange}
            placeholder="Enter author's name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genre" className="form-label">Genre</label>
          <select
            name="genre"
            id="genre"
            className="form-select"
            value={book.genre}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a genre</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>{g.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">Publisher</label>
          <select
            name="publisher"
            id="publisher"
            className="form-select"
            value={book.publisher}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a publisher</option>
            {publishers.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/books" className="btn btn-secondary">Cancel</Link>
          <button type="submit" className="btn btn-primary">Update Book</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
