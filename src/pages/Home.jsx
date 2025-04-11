import React from 'react';
import Sidebar from '../layouts/Sidebar.jsx'
import Header from '../layouts/Header.jsx'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
      <main className="flex-1 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold">Welcome to Spotify Portfolio</h1>
      </main>
      
  );
};

export default Home;