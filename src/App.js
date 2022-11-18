import React from 'react';
import './App.css';
import { Home, NotFound, Explore, ProtectedRoute, Login, Register } from './Components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute active={false}>
            <Home></Home>
          </ProtectedRoute>
        }></Route>
        <Route
          path='/register'
          element={
            <Register></Register>
          } >
        </Route>
        <Route
          path='/login'
          element={
            <Login></Login>
          } >
        </Route>
        <Route path='/cars' element={
          <ProtectedRoute>
            <Explore></Explore>
          </ProtectedRoute>
        }></Route>
        <Route path='*' element={
          <div>
            <Home></Home>
            <NotFound></NotFound>
          </div>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
