import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import BackButton from './components/BackButton';
import './App.css'


function App() {
  return (
    <>
      <div className="app-container flex flex-col min-h-screen">
        <Header />
        <BackButton />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4">
            <ProfilePage />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
