import { FaCheck } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';

const Permissions = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-6 py-4">
      <h2 className="font-bold text-xl text-[#171A1F] work-sans-font flex items-center">
        Permissions <FiSettings className="ml-2 text-[#323842]" />
      </h2>

      <div className="w-full md:w-[500px] border border-[#DEE1E6] rounded-md p-6 bg-white space-y-6">
        {[1, 2].map((num) => (
          <div key={num} className="space-y-4">
            <h4 className="work-sans-font font-semibold text-lg text-[#323842]">
              Account name ({num})
            </h4>

            <div className="inter-font flex justify-between">
              <span>Role: Super Admin</span>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FaCheck className="w-3 h-3 text-[#32CD32]" />
                  <span>Account</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="w-3 h-3  text-[#32CD32]" />
                  <span>Provider</span>
                </div>
              </div>
            </div>

            <div className="inter-font flex justify-between">
              <span>Role: Admin</span>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FaCheck className="w-3 h-3 text-[#32CD32]" />
                  <span>Listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="w-3 h-3 text-[#32CD32]" />
                  <span>Banners</span>
                </div>
              </div>
            </div>

            {num === 1 && <hr className="border-t border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Permissions;
