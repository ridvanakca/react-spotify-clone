import React from "react";
import logo from 'img/logo.svg';
import Menu from "./Sidebar/Menu";

function Sidebar() {
  return <aside className='w-60 py-6 flex flex-col'>
    <a href='#' className='mb-7 px-6'>
      <img className='h-10' src={logo} alt='' />
    </a>
    
    <Menu />
    </aside>;
}

export default Sidebar;
