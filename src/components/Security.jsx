const Security = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-6 py-4">
      <h2 className="font-bold text-xl text-[#171A1F] work-sans-font">Security</h2>

      <div className="w-full md:w-[500px] border border-[#DEE1E6] rounded-md p-6 bg-white">
        <div className="flex items-center justify-between w-full">
          <span className="inter-font text-black">
            Password: <span className="tracking-widest">••••••••</span>
          </span>
          <button className="inter-font text-sm px-3 py-2 border border-[#323842] rounded-md text-gray-700 hover:bg-gray-50">
            Change password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
