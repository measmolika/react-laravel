import React, { useState } from 'react';
import axios from 'axios';
const API = 'http://127.0.0.1:8000/api';


const Register = () => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const register = async (name, email, password, password_confirmation) => {
    try {
      const res = await axios.post(`${API}/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      localStorage.setItem('token', res.data.token);
      return res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(
        formData.name,
        formData.email,
        formData.password,
        formData.password_confirmation
      );
      setMessage('Registration successful!');
      console.log(response);
    } catch (error) {
      setMessage(error.message || 'Registration failed');
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;