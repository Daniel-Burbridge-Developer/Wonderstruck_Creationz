import React from 'react';
// import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './home';
import NavBar from './navbar';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="bg-backdrop-paintsplash flex min-h-screen flex-grow flex-col bg-cover bg-center bg-no-repeat">
        <NavBar />
        <Home />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);
