import React from "react";
import Navbar from "components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

function Content() {
  return <main className='flex-auto'>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/collection' element={<Collection />} />
    </Routes>
    </main>;
}

export default Content;
