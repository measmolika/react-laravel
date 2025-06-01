import {useState} from 'react';
import { RiQuestionMark } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import profileImage from '../assets/profile_picture.png';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-white px-4 md:px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-10">
        <div className="hidden sm:block work-sans-font text-black text-[28px] px-[10px] md:px-[35px] font-bold">
          Staff Hub
        </div>
        <button
          className="block sm:hidden p-2 ml-4"
          onClick={() => setShowMenu(true)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav className="hidden md:flex inter-font space-x-6 text-sm text-[#565E6C] pt-1">
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
      <div
        className={`fixed top-0 left-0 h-full w-[100%] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setShowMenu(false)}>
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="inter-font flex flex-col items-center gap-6 mt-10 text-lg text-[#565E6C]">
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Home</a>
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Provider</a>
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Listing</a>
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Form</a>
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Banner</a>
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Student</a>
          <a href="#" onClick={() => setShowMenu(false)} className="hover:text-blue-600">Report</a>
        </nav>
      </div>
    </header>
  )
};

export default Header;
