import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Frontend', path: '/frontend' },
  { name: 'Backend', path: '/backend' },
  { name: 'Marketing', path: '/marketing' },
  { name: 'Design', path: '/design' },
];

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col items-center text-center w-full max-w-6xl">

        <div className="mb-10 px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Website Development Checklist</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A simple guide for all teams — frontend, backend, marketing, and design. </p> 
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay on track and cover every step.</p>           
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-300 flex items-center justify-center text-xl font-semibold text-gray-800"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;