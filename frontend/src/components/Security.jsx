import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';


const Security = () => {
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${API_BASE_URL}/change-password`,
        {
          current_password: currentPassword,
          new_password: newPassword,
          new_password_confirmation: confirmNewPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        setSuccess("Password change successful!");
      } else {
        setError("Password change failed.");
      }
    } catch (error) {
      setError("Password change failed.");
      console.log(error);
    }
  };

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
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="inter-font block font-bold text-sm mb-1">Current password</label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
                className="inter-font w-full border border-[#BCC1CA] rounded-md p-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="inter-font block font-bold text-sm mb-1">New password</label>
              <input
                type="password"
                id="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="inter-font w-full border border-[#BCC1CA] rounded-md p-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="inter-font block font-bold text-sm mb-1">Confirm new password</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Security;
