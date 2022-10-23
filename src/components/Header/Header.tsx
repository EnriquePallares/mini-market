import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBagShopping,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
export interface HeaderInterface {}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header>
      <nav className="flex relative py-2 items-center justify-between">
        <div className="container mx-auto px-3 flex items-center justify-between">
          <a
            href="#"
            className="py-3 px-4 mr-5 rounded-lg no-underline whitespace-nowrap text-xl leading-normal bg-primary text-white"
          >
            <FontAwesomeIcon icon={faBagShopping} size="2x" />
          </a>

          <button
            type="button"
            className="text-white bg-primary focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            <FontAwesomeIcon role="button" icon={faCartShopping} /> $0
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
