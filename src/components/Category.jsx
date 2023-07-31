import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  console.log(categories);
  return (
    <div data-aos="fade-right" className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-black font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div data-aos="fade-right" data-aos-duration="900" className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-orange-50 hover:shadow-lg rounded-lg p-2 flex justify-between items-center'>
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            <img src={item.image} alt={item.name} className='w-16' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
