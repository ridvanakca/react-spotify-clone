import React, { useRef, useState, useEffect } from "react";
import categories from "data/categories";
import Title from "components/Title";
import favoriteCategories from "data/favorite-categories";
import ScrollContainer from "react-indiana-drag-scroll";
import { Icon } from "Icons";
import CategoryItem from "components/CategoryItem";
import WideCategoryItem from "components/WideCategoryItem";

function Search() {
  const favoritesRef = useRef();
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth;
        const isBegin = favoritesRef.current.scrollLeft === 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };

      scrollHandle();
      favoritesRef.current.addEventListener("scroll", scrollHandle);

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle);
      };
    }
  }, [favoritesRef]);

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300;
  };

  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300;
  };

  return (
    <>
      <section className='mb-8'>
        <Title title='En çok dinlediğin türler' />
        <div className='relative'>
          {prev && (
            <button className='w-12 h-12 absolute -left-6 hover:scale-[1.06] z-10 rounded-full top-1/2 -translate-y-1/2 bg-white text-black flex items-center justify-center' onClick={slideFavoritesPrev}>
              <Icon name='prev' size={24} />
            </button>
          )}
          {next && (
            <button className='w-12 h-12 absolute -right-6 hover:scale-[1.06] z-10 rounded-full top-1/2 -translate-y-1/2 bg-white text-black flex items-center justify-center' onClick={slideFavoritesNext}>
              <Icon name='next' size={24} />
            </button>
          )}
          <ScrollContainer className='flex overflow-x gap-x-6 scrollable' innerRef={favoritesRef}>
            {favoriteCategories.map((category, index) => (
              <WideCategoryItem key={index} category={category} />
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title='Hepsine göz at' />
        <div className='grid grid-cols-5 gap-6'>
          {categories.map((category, index) => (
            <CategoryItem key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Search;
