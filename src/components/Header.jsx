import React, { useState } from 'react';
import Fries from '../assets/fries.svg'
import Close from '../assets/close.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  AOS.init();


  return (
    <div>
      <nav className='h-[10vh] text-xl max-sm:text-sm'>
        <div className="flex items-center justify-between px-10 max-sm:px-3">
          <div
            className={`logo font-semibold ${
              isMenuOpen ? 'hidden' : ''
            }`}
          >
            <a href="#home" className="flex items-center text-2xl max-sm:text-lg">
              <h1>HOMER</h1>
            </a>
          </div>
          <div
            className={`flex items-center space-x-4 ml-auto font-semibold ${
              isMenuOpen ? 'animate__animated animate__flipInX' : 'hidden'
            }`}
          >
            <a
              href="#"
              className="hover:text-blue-500"
            >
              HOME
            </a>
            <a
              href="#"
              className="hover:text-blue-500"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="max-sm:hidden hover:text-blue-500"
            >
              SKILLS
            </a>
            <a
              href="#"
              className="max-sm:hidden hover:text-blue-500"
            >
              PROJECTS
            </a>
            <a
              href="#"
              className="hover:text-blue-500"
            >
              CONTACT
            </a>
          </div>
          <div className="pt-2">
            <button className="outline-none cursor-pointer" onClick={toggleMenu}>
              <img className={`w-10 h-10 max-sm:w-8 max-sm:h-8  cursor-pointer ${
                isMenuOpen ? 'hidden' : ''
                }`} 
                src={Fries} 
                alt="fries" 
              />
              <img 
                className={`w-10 h-10 max-sm:w-8 max-sm:h-8  cursor-pointer ${
                  isMenuOpen ? '' : 'hidden'
                }`}
                src={Close} 
                alt="close" 
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

