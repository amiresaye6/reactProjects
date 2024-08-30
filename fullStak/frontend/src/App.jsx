import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/create' element={<CreateBook />} />
      <Route path='/products/details/:id' element={<ShowBook />} />
      <Route path='/products/edit/:id' element={<EditBook />} />
      <Route path='/products/delete/:id' element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
