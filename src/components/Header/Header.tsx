import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header>
      <nav className="flex relative py-2 items-center justify-between">
        <div className="container mx-auto px-3 rounded flex items-center justify-between bg-white">
          <a
            href="#"
            className="py-1 mr-5 no-underline whitespace-nowrap text-xl leading-normal"
          >
            <img
              src="/src/assets/images/logo.jpg"
              alt="Logo"
              className="w-20"
            />
          </a>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <FontAwesomeIcon role="button" icon={faCartShopping} /> $0
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
