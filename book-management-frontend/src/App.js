import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';

import BookList from './pages/book/BookList.jsx';
import AddBook from './pages/book/AddBook.jsx';
import EditBook from './pages/book/EditBook.jsx';

import GenreList from './pages/genre/GenreList.jsx';
import AddGenre from './pages/genre/AddGenre.jsx';
import EditGenre from './pages/genre/EditGenre.jsx';

import PublisherList from './pages/publisher/PublisherList.jsx';
import AddPublisher from './pages/publisher/AddPublisher.jsx';
import EditPublisher from './pages/publisher/EditPublisher.jsx';

import SignIn from './pages/auth/SignIn.jsx';
import SignUp from './pages/auth/SignUp.jsx';

const App = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* Authentication Pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

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
