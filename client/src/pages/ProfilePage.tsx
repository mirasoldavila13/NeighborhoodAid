import React from 'react';
import { useEffect, useState } from 'react';
import DashboardNav from '../components/DashboardNav';
import Footer from '../components/Footer';
import authService from '../services/authService';
import user from '../assets/user.png'; 

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<any>(null); 

  useEffect(() => {
    const profile = authService.getProfile(); 
    setUserProfile(profile);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <main className="flex-grow p-6 mt-16">
        <div className="container mx-auto flex flex-col items-center">
          <img
            src={user}
            alt="User Profile"
            className="h-32 w-32 rounded-full border-2 border-gray-300 shadow-md"
          />
          <div className="flex-grow mt-4 text-center">
            <h1 className="text-3xl font-bold mb-2">{userProfile?.name || "User"}</h1>
            <p className="text-lg text-gray-700">Email: {userProfile?.email}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
