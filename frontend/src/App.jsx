import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css'

const App = () => {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorage = () => {
      setAuthenticated(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          authenticated ? <Navigate to="/profile" /> : <Navigate to="/register" />
        } />

        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={<Register setAuthenticated={setAuthenticated} />} />

        <Route
          path="/profile"
          element={authenticated ? <ProfilePage /> : <Navigate to="/register" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
