import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import NavBar from './navbar';
import Category from './category';
import SubCategory from './subCategory';
import AdminPanel from './adminPanel';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <div className="flex min-h-screen flex-grow flex-col bg-backdrop-paintsplash bg-cover bg-center bg-no-repeat">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/:category" element={<Category />} />
            <Route
              path="/categories/:category/:subCategory"
              element={<SubCategory />}
            />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
);
