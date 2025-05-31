import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';


const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

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
      const { name, email, password, password_confirmation } = formData;
      const res = await axios.post(`${API_BASE_URL}/register`, {
        name,
        email,
        password,
        password_confirmation,
      });
      if (res.data && res.data.token) {
        localStorage.setItem('token', res.data.token);
        navigate('/profile');
      } else {
        setMessage('Unexpected response from server.');
      }
    } catch (error) {
      setMessage('Registration failed');
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="inter-font bg-white shadow-sm rounded-lg p-6 w-full max-w-md border border-[#DEE1E6]">
        <h2 className="text-xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#BCC1CA] rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#BCC1CA] rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#BCC1CA] rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Enter password"
            />
          </div>
          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
              placeholder="Confirm password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#a2a3a5] text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
          >
            Register
          </button>
          {message && <p className="text-red-500 text-sm">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
