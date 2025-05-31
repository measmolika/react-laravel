import React from 'react';
import { RiQuestionMark } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import profileImage from '../assets/profile_picture.png';

const Header = () => (
  <header className="bg-white px-4 sm:px-6 py-3 flex justify-between items-center">
    <div className="flex items-center space-x-10">
      <div className="work-sans-font text-black text-[28px] px-[35px] font-bold">
        Staff Hub
      </div>
      <nav className="inter-font hidden md:flex space-x-6 text-sm text-[#565E6C] pt-1">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Provider</a>
        <a href="#" className="hover:text-blue-600">Content</a>
        <a href="#" className="hover:text-blue-600">Listing</a>
        <a href="#" className="hover:text-blue-600">Form</a>
        <a href="#" className="hover:text-blue-600">Banner</a>
        <a href="#" className="hover:text-blue-600">Student</a>
        <a href="#" className="hover:text-blue-600">Report</a>
      </nav>
    </div>

    <div className="flex items-center space-x-6 text-gray-600 text-lg">
      <RiQuestionMark className="cursor-pointer text-[20px]" />
      <FaRegBell className="cursor-pointer text-[20px]" />
      <img
        src={profileImage}
        alt="Profile"
        className="w-[36px] h-[36px] rounded-full object-cover"
      />
    </div>
  </header>
);

export default Header;
