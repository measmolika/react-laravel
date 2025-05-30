// File: components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white py-6">
    <div className="container mx-auto px-4 flex flex-col space-y-4 items-end">
      
      <div className="flex flex-wrap justify-center space-x-6 text-sm">
        <a href="#" className="inter-font hover:underline">About us</a>
        <a href="#" className="inter-font hover:underline">Help Center</a>
        <a href="#" className="inter-font hover:underline">Contact us</a>
      </div>

      <hr className="w-full border-t border-[#DEE1E6]" />

      <div className="flex justify-center space-x-4 text-xl">
        <a href="#" className="text-[#DE3B40]"><FaInstagram /></a>
        <a href="#" className="text-[#4C8AFF]"><FaFacebook /></a>
        <a href="#" className="text-[#5378D0]"><FaLinkedin /></a>
        <a href="#" className="text-[#FF4C4C]"><FaYoutube /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
