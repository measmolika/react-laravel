import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';
import ProfileSection from './ProfileSection';
import BackButton from './BackButton';
import '../App.css'


const ProfilePage = () => (
  <div className="app-container flex flex-col min-h-screen">
    <Header />
    <BackButton />
    <div className="flex w-full">
      <div
        className="hidden md:block md:max-w-[20%] w-full mx-4 mb-12"
        style={{
          boxShadow: `
            0 0 1px rgba(23, 26, 31, 0.07),
            0 0 2px rgba(23, 26, 31, 0.12)
          `
        }}
      >
        <Sidebar />
      </div>
      <main className="flex-1 p-4">
        <ProfileSection />
      </main>
    </div>
    <Footer />
  </div>
)

export default ProfilePage;
