import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  // Fetch all books on component mount
  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await axios.get('http://spring-backend:8080/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this book?');
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://spring-backend:8080/api/books/${id}`);
      loadBooks(); // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Book Management System</h2>

      <div className="d-flex justify-content-end mb-3">
        <Link to="/add-book" className="btn btn-success">Add New Book</Link>
      </div>

      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No books found</td>
            </tr>
          ) : (
            books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre?.name}</td>
                <td>{book.publisher?.name}</td>
                <td>
                  <Link to={`/edit-book/${book.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button onClick={() => deleteBook(book.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Link to="/" className="btn btn-secondary">Home Page</Link>
    </div>
  );
};

export default BookList;
