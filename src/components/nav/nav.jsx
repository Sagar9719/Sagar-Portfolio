// import React from 'react'
// import './nav.css'
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineUser} from 'react-icons/ai'
// import {BiBook} from 'react-icons/bi'
// import {RiServiceLine} from 'react-icons/ri'
// import {BiMessageSquareDetail} from 'react-icons/bi'
// import {useState} from 'react'

// function nav() {
//   const [activeNav, setActiveNav] = useState('#')

//   const handleNavClick = (navId) => {
//     setActiveNav(navId);
//   };

//   return (
//     <nav>
//       <a href="#" className={activeNav == '#' ? 'active' : ''}><AiOutlineHome/></a>
//       <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav == '#' ? 'active' : ''}><AiOutlineUser/></a>
//       <a href="#experience"><BiBook/></a>
//       <a href="#services"><RiServiceLine/></a>
//       <a href="#contact"><BiMessageSquareDetail/></a>
//     </nav>
//   )
// }

// export default nav

import React, { useState } from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

function Nav() { // Renamed the component to start with an uppercase letter
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => handleNavClick('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => handleNavClick('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => handleNavClick('#experience')}><BiBook /></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => handleNavClick('#services')}><RiServiceLine /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => handleNavClick('#contact')}><BiMessageSquareDetail /></a>
    </nav>
  );
}

export default Nav;

