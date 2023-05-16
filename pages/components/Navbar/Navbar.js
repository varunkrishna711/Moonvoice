import React from 'react';
import { useState } from 'react';
import styles from './Navbar.module.css';
// import logo from "../images/logo-nav.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div>
       <nav className={`h-20 bg-custom-light-green4 sm:flex lg:hidden md:flex`}>
          <div className="flex w-full h-full align-center justify-between">
            <img src="nfdkn" className="ml-4 mt-8"/>
            <div>
              <FontAwesomeIcon icon={faBars} className="mr-4 mt-8 text-green-700" onClick={toggleMenu}/>
            </div>
          </div>

          <div className={`sm:flex items-center ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <ul className="sm:flex">
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-custom-green2 hover:text-white mx-4">
              Feature 1
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-custom-green2 hover:text-white mx-4">
              Feature 2
            </a>
          </li>
          <li>
            <a href="#" className="block mt-4 sm:inline-block sm:mt-0 text-custom-green2 hover:text-white mx-4">
              Feature 3
            </a>
          </li>
        </ul>
      </div>

       </nav>

      <nav className={`justify-between align-center px-16 py-128 w-full h-20 bg-custom-light-green4 hidden sm:flex md:hidden lg:flex`}>
          <img src="nfdkn" className="ml-64 mt-2"/>
          <ul className={`${styles.navbar_list} flex mt-4`}>
            <div className='flex mr-32'>
              <li><a href="#">Services</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About Us</a></li>
            </div>  
            <div className='flex mr-96'>
              <li className={styles.login}><a href="/login">Log In</a></li>
              <li><button className={styles.get_in_touch_button}>Start Free</button></li>
            </div>
          </ul>
      </nav>
    </div>

  );
}

export default Navbar;
