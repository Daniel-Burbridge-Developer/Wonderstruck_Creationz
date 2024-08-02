import React from 'react';
// import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './home';
import NavBar from './navbar';
import Category from './category';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex min-h-screen flex-grow flex-col bg-backdrop-paintsplash bg-cover bg-center bg-no-repeat">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" component={Category} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
