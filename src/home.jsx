// src/App.jsx

import React from 'react';
import './index.css';

function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-blue-600 p-4 text-white">
        <h1 className="text-center text-3xl font-bold">
          Welcome to My Homepage
        </h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center">
        <section className="rounded bg-white p-8 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">About Us</h2>
          <p className="mb-4 text-gray-700">
            We are excited to welcome you to our website. Here, you'll find a
            variety of resources and information about our services.
          </p>
          <a href="#services" className="text-blue-500 hover:underline">
            Learn more about our services
          </a>
        </section>
      </main>
      <footer className="w-full bg-gray-800 p-4 text-center text-white">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
