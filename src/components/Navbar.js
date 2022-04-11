import React from "react";
import { useMatch } from "react-router";
import Search from "./Navbar/Search";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";

function Navbar() {
  const searchRoute = useMatch("/search");

  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
      <Navigation />

      {searchRoute && <Search />}

      <Auth />
    </nav>
  );
}

export default Navbar;
