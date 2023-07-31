import React from 'react';
import { Link } from 'react-router-dom';

const HeadlineCards = () => {
  return (<>
    <div className="flex mt-10 justify-center">
      <h1 className="text-center font-bold text-4xl">Top Restaurants Near You</h1>
    </div>
    <div data-aos-duration="800" data-aos="fade-up" className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div data-aos="zoom-in" className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <Link to="/maintenance">
            <button className='transition-all bg-orange-500 text-white border-none hover:bg-orange-600  rounded-full py-2 mx-2 absolute bottom-4'>Order Now</button>
          </Link>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      {/* Card */}
      <div data-aos="zoom-in" className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>CSula Restaurants</p>
          <p className='px-2'>24/7</p>
          <Link to='/maintenance'>
            <button className='transition-all bg-orange-500 text-white border-none hover:bg-orange-600  rounded-full py-2 mx-2 absolute bottom-4'>Order Now</button>
          </Link>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      {/* Card */}
      <div data-aos="zoom-in" className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Tasty Treats</p>
          <Link to='/maintenance'>
            <button className='transition-all bg-orange-500 text-white border-none hover:bg-orange-600  rounded-full py-2 mx-2 absolute bottom-4'>Order Now</button>
          </Link>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80'
          alt='/'
        />
      </div>
      <div data-aos="zoom-in" className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Tasty Treats</p>
          <Link to='/maintenance'>
            <button className='transition-all bg-orange-500 text-white border-none hover:bg-orange-600  rounded-full py-2 mx-2 absolute bottom-4'>Order Now</button>
          </Link>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
          alt='/'
        />
      </div>
      <div data-aos="zoom-in" className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
          <p className='px-2'>Tasty Treats</p>
          <Link to='/maintenance'>
            <button className='transition-all bg-orange-500 text-white border-none hover:bg-orange-600  rounded-full py-2 mx-2 absolute bottom-4'>Order Now</button>
          </Link>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>
      <div data-aos="zoom-in" className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <Link to='/maintenance'>
            <button className='transition-all bg-orange-500 text-white border-none hover:bg-orange-600  rounded-full py-2 mx-2 absolute bottom-4'>Order Now</button>
          </Link>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='/'
        />
      </div>
    </div >
  </>
  );
};

export default HeadlineCards;
