import React from 'react';
import { FaUser } from "react-icons/fa6";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { GoOrganization } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";

const Sidebar = () => (
  <aside
    className="bg-white h-auto"
  >
    <div className="p-4 text-sm font-medium flex justify-between items-center text-[#565E6C]">
      <span className="work-sans-font font-semibold text-xl">Account Settings</span>
      <span>
        <TbLayoutNavbarCollapse className="w-[30px] h-[30px] rotate-270" />
      </span>
    </div>
    <nav className="py-4 space-y-6 text-gray-700 text-sm">
      <a href="#" className="px-4 flex items-center space-x-2 text-[#171A1F] font-bold inter-font border-l-4">
        <FaUser />
        <span>My Profile</span>
      </a>
      <a href="#" className="px-4 flex items-center space-x-2 hover:text-blue-600 text-[#565E6C] text-sm inter-font">
        <HiOutlineUsers />
        <span>Users</span>
      </a>
      <a href="#" className="px-4 flex items-center space-x-2 hover:text-blue-600 text-[#565E6C] text-sm inter-font">
        <GoOrganization />
        <span>Account List</span>
      </a>
    </nav>
  </aside>
);

export default Sidebar;
