import React from "react";
import logo from 'img/logo.svg';
import Menu from "./Sidebar/Menu";
import { Icon } from "Icons";

function Sidebar() {
  return <aside className='w-60 py-6 flex flex-col bg-black'>
    <a href='#' className='mb-7 px-6'>
      <img className='h-10' src={logo} alt='' />
    </a>
    
    <Menu />

    <nav className='mt-6'>
        <ul>
            <li>
                <a  href='#' className='px-6 py-2 flex items-center group text-sm text-link font-semibold hover:text-white'>
                    <span className='w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100 bg-opacity-50 rounded-sm text-black'>
                        <Icon name='plus' size={12} />
                    </span>
                    Çalma Listesi Oluştur
                </a>
            </li>
            <li>
                <a href='#' className='px-6 py-2 flex items-center group text-sm text-link font-semibold hover:text-white'>
                    <span className='w-6 h-6 flex items-center justify-center mr-4 text-white rounded-sm bg-gradient-to-br from-purple-700 to-blue-300 opacity-70 group-hover:opacity-100'>
                        <Icon name='heartFilled' size={12} />
                    </span>
                    Beğenilen Şarkılar
                </a>
            </li>
        </ul>
    </nav>
    </aside>;
}

export default Sidebar;
