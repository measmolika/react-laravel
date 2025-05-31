import React from "react";
import PersonalDetails from "./PersonalDetails";
import Security from "./Security";
import Permissions from "./Permissions";


const ProfileSection = () => (
  <div className="max-w-5xl pb-4 content-center mx-auto">
    <h2 className="px-4 work-sans-font font-bold text-[25px] text-[#171A1F]">My Profile</h2>
    <div className="divide-y divide-[#DEE1E6] max-w-8/10 mx-auto">
      <div className="py-4">
        <PersonalDetails />
      </div>
      <div className="py-4">
        <Security />
      </div>
      <div className="py-4">
        <Permissions />
      </div>
      <div className="py-4" ></div>
    </div>
  </div>
);

export default ProfileSection;
