import { useState } from 'react';

const Security = () => {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-6 py-4">
      <h2 className="font-bold text-xl text-[#171A1F] work-sans-font">Security</h2>

      <div className="w-full md:w-[500px] border border-[#DEE1E6] rounded-md p-6 bg-white">
        {!showChangePasswordForm ? (
          <div className="flex items-center justify-between w-full">
            <span className="inter-font text-black">
              Password: <span className="tracking-widest">••••••••</span>
            </span>
            <button
              className="inter-font text-sm px-3 py-2 border border-[#323842] rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => setShowChangePasswordForm(true)}>
              Change password
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-4">
            <div>
              <label className="inter-font block font-bold text-sm mb-1">Current password</label>
              <input
                type="password"
                placeholder="Enter current password"
                className="inter-font w-full border border-[#BCC1CA] rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="inter-font block font-bold text-sm mb-1">New password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="inter-font w-full border border-[#BCC1CA] rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="inter-font block font-bold text-sm mb-1">Confirm new password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="inter-font w-full border border-[#BCC1CA] rounded-md p-2 text-sm"
              />
            </div>
            <button
              type="submit"
              className="inter-font text-sm bg-[#a2a3a5] text-white py-2 px-4 rounded-md self-end hover:bg-gray-700"
            >
              Change password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Security;
