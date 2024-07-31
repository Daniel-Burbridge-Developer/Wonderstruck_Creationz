import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b bg-gradient-to-r from-pink-500 to-cyan-500 px-4 md:px-6">
      <div className="flex items-center gap-4 text-sm font-medium">
        <Link to="/" className="flex items-center font-bold" prefetch={false}>
          <img
            src="./assets/logos/wonderstruck-creationz-simple-small.png"
            alt="Wonderstruck Creationz Logo"
            width={48}
            height={48}
            className="mr-2"
          />
          Wonderstruck Creationz
        </Link>
      </div>
      <div className="flex items-center gap-4 text-sm font-medium">
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Products
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Contact
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          prefetch={false}
        >
          <ShoppingCartIcon className="h-5 w-5" />
          Cart
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
