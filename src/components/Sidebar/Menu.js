import React from 'react';
import { Icon } from 'Icons';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink to={'/'} className={({ isActive }) => 'h-10 flex gap-x-4 items-center text-sm font-semibold rounded hover:text-white px-4' + (isActive ? " bg-active text-white" : " text-link")}>
                    <span>
                        <Icon name='home' />
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>
                <NavLink to={'/search'} className={({ isActive }) => 'h-10 flex gap-x-4 items-center text-sm font-semibold rounded hover:text-white px-4' + (isActive ? " bg-active text-white" : " text-link")}>
                    <span>
                        <Icon name='search' />
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink to={'/collection'} className={({ isActive }) => 'h-10 flex gap-x-4 items-center text-sm font-semiboldrounded hover:text-white px-4' + (isActive ? " bg-active text-white" : " text-link")}>
                    <span>
                        <Icon name='collection' />
                    </span>
                    Kitaplığın
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu