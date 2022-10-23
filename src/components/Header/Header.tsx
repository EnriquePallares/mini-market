import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header>
      <nav className="flex relative py-2 items-center justify-between bg-cyan-500">
        <div className="container mx-auto flex items-center justify-between">
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

          <button className="rounded text-xl bg-[#fef200] py-1 px-3">
            <FontAwesomeIcon role="button" icon={faCartShopping} /> $0
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
