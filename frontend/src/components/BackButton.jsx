import { FaChevronLeft } from 'react-icons/fa';

const BackButton = () => {
  return (
    <div className="inter-font flex items-center text-[#565E6C] px-8 py-4 text-xs cursor-pointer hover:text-black">
      <FaChevronLeft className="mr-1 w-[10px] h-[10px] text-xs text-[#565E6C]" />
      <span>Back</span>
    </div>
  );
};

export default BackButton;