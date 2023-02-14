import React from 'react';

import Logo  from '../assets/img/logo.svg';
import Nav from './Nav'

// icons
import {HiMenu} from 'react-icons/hi'

const Header = ({setnavMobile}) => {
  return(
    <header data-aos='fade-down' data-aos-duration='2000' data-aos-delay='900'>
      <div>
        <div className='flex items-center justify-between'>
          {/* logo */}
          <a href='#'>
            <img  className='h-[30px]' src={Logo} alt="img"></img>
          </a>
          <Nav />
          <HiMenu onClick={() => setnavMobile(true)} className='lg:hidden text-white text-3xl  cursor-pointer' />
        </div>
      </div>
    </header>
  );
};

export default Header;
