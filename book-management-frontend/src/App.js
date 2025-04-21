import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import BookList from './pages/book/BookList';
import AddBook from './pages/book/AddBook';
import EditBook from './pages/book/EditBook';

import GenreList from './pages/genre/GenreList';
import AddGenre from './pages/genre/AddGenre';
import EditGenre from './pages/genre/EditGenre';

import PublisherList from './pages/publisher/PublisherList';
import AddPublisher from './pages/publisher/AddPublisher';
import EditPublisher from './pages/publisher/EditPublisher';

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Book Pages */}
      <Route path="/books" element={<BookList />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/edit-book/:id" element={<EditBook />} />

      {/* Genre Pages */}
      <Route path="/genres" element={<GenreList />} />
      <Route path="/add-genre" element={<AddGenre />} />
      <Route path="/edit-genre/:id" element={<EditGenre />} />

      {/* Publisher Pages */}
      <Route path="/publishers" element={<PublisherList />} />
      <Route path="/add-publisher" element={<AddPublisher />} />
      <Route path="/edit-publisher/:id" element={<EditPublisher />} />
    </Routes>
  );
};

export default App;
