import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css'

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated() ? <Navigate to="/profile" /> : <Navigate to="/register" />
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/profile"
          element={isAuthenticated() ? <ProfilePage /> : <Navigate to="/register" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
