import React from 'react';

import {IoClose} from 'react-icons/io5';

const NavMobile = ({setnavMobile}) => {
  return (
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>
      <IoClose onClick={() => setnavMobile(false)} className='text-3xl absolute left-4 top-6 cursor-pointer'/>
      <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary ' >
        <li className='nav-link'>
        <a href='#'>Home</a>
        </li>
        <li className='nav-link'>
        <a href='#'>company</a>
        </li>
        <li className='nav-link'>
        <a href='#'>features</a>
        </li>
        <li className='btn'>
        <a href='#'>Sign-up</a>
        </li>
      </ul>
    </nav>
    
  );
};

export default NavMobile;
