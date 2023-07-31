import React, { useState } from 'react';
import { data } from '../data/data.js';
const INITIAL_ITEMS = 4;
const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);
  const [initialItems, setInitialItems] = useState(INITIAL_ITEMS)

  const handleLoadMore = () => {
    setInitialItems(prev => prev + INITIAL_ITEMS)
  }


  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div data-aos="fade-in" className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-black font-bold text-4xl text-center'>
        Available Food Items for you
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div data-aos="fade-left">
          <p className='font-bold'>Filter Type</p>
          <div className='flex my-2  flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'>
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'>
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'>
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'>
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'>
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div data-aos="fade-right">
          <p className='font-bold'>Filter Price</p>
          <div className='flex my-2 justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('10')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'
            >
              10
            </button>
            <button
              onClick={() => filterPrice('50')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'
            >
              50
            </button>
            <button
              onClick={() => filterPrice('100')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'
            >
              100
            </button>
            <button
              onClick={() => filterPrice('200')}
              className='transition-all bg-orange-500 text-white border-none hover:bg-orange-400  rounded-full py-2 mx-2 bottom-4'
            >
              200
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div data-aos="fade-up" className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.slice(0, initialItems).map((item, index) => (
          <div
          data-aos="fade-up"
          data-aos-duration="600"
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex my-10 justify-center items-center">
        <button
          disabled={initialItems === data.length - 1}
          onClick={handleLoadMore}
          className='flex justify-center transition-all bg-orange-500 border-none hover:text-white hover:bg-orange-400 text-black items-center py-3 rounded-lg'>
          Load More Items
        </button>
      </div>
    </div>
  );
};

export default Food;
