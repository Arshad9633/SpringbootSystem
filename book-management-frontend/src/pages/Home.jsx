import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Book System</span>
          <div className="d-flex ms-auto">
            <Link to="/signin" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-outline-success">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h1 className="display-4">Welcome to Book Management System</h1>
          <p className="lead">Manage your books, genres, and publishers with ease.</p>
        </div>
      </section>

      {/* Action Cards */}
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Books</h5>
                <p className="card-text">Add, view, edit and delete books.</p>
                <Link to="/books" className="btn btn-primary">Manage Books</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Genres</h5>
                <p className="card-text">Organize books by genres.</p>
                <Link to="/genres" className="btn btn-success">Manage Genres</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Publishers</h5>
                <p className="card-text">Manage publisher info and more.</p>
                <Link to="/publishers" className="btn btn-warning">Manage Publishers</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
