import { Icon } from "Icons";
import React from "react";
function Search() {
  return (
    <div className='mr-auto ml-4 relative'>
      <label htmlFor='search-input' className='text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
        <Icon name='search' size={24} />
      </label>
      <input autoFocus={true} id='search-input' type='text' className='pl-12 h-10 outline-none text-black font-medium bg-white text-sm rounded-3xl placeholder-black/50 max-w-full w-[22.75rem]' placeholder="Sanatçılar, şarkılar veya podcast'ler" />
    </div>
  );
}

export default Search;
