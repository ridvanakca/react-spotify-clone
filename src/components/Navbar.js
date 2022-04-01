import React from 'react'
import Auth from './Navbar/Auth'
import Navigation from './Navbar/Navigation'

function Navbar() {
  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation />

      <Auth />
    </nav>
  )
}

export default Navbar