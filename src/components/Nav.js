import React from 'react';

const Nav = () => {
  return(
    <nav className='hidden  lg:flex'>
      <ul className='flex items-center space-x-12 font-secondary ' >
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
   
  )

};

export default Nav;
