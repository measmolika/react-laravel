import { FaPen } from 'react-icons/fa';
import profileImage from '../assets/profile_picture.png'; // Adjust path accordingly

const PersonalDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8 pb-4">
      <h2 className="font-bold text-xl text-[#171A1F] work-sans-font">Personal Details</h2>

      <div className="w-full md:w-[500px] border border-[#DEE1E6] rounded-md p-6 bg-white">
        <div className="flex items-start mb-6 relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="absolute bottom-0 left-15 bg-gray-800 text-white p-1 rounded-full cursor-pointer hover:bg-gray-700">
            <FaPen className="w-3 h-3" />
          </div>
        </div>

        <div className="mb-4">
          <div className="inter-font text-sm font-bold text-[#424955]">Full name</div>
          <div className="inter-font text-sm text-[#171A1F]">Joleen Collins</div>
        </div>

        <hr className="my-4 border-gray-200" />

        <div>
          <div className="inter-font text-sm font-bold text-[#424955]">Email</div>
          <div className="inter-font text-sm text-[#171A1F]">joleencollins@karieragroup.com</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
