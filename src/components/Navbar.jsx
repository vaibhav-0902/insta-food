import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className=' max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer hover:text-orange-500'>
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/home">
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 '>
            Insta <span className='font-bold'>FOOD</span>
          </h1>
        </Link>

      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
        />
      </div>
      <div className="flex">
        <Link to="/">
          <button className='transition-all mx-2 bg-orange-500 border-none hover:text-white hover:bg-orange-400 text-slate- hidden md:flex items-center py-2 rounded-lg'>
            <MdLogout size={20} className='mr-2' /> Log Out
          </button>
        </Link>
        {/* Cart button */}
        <Link to="/cart">
          <button className='transition-all mx-2 bg-orange-500 border-none hover:text-white hover:bg-orange-400 text-slate- hidden md:flex items-center py-2 rounded-lg'>
            <BsFillCartFill size={20} className='mr-2' /> Cart
          </button>
        </Link>
      </div>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer hover:text-red-600'
        />
        <Link to="/home">
          <h2 className='text-2xl p-4'>
            Insta <span className='font-bold'>FOOD</span>
          </h2>
        </Link>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <Link to="/maintenance
            ">
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <TbTruckDelivery size={25} className='mr-4' />
                Orders
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <MdFavorite size={25} className='mr-4' />
                Favorites
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <FaWallet size={25} className='mr-4' />
                Wallet
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <MdHelp size={25} className='mr-4' />
                Help
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <AiFillTag size={25} className='mr-4' />
                Promotions
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <BsFillSaveFill size={25} className='mr-4' />
                Best Ones
              </li>
              <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>
                <FaUserFriends size={25} className='mr-4 ' />
                Invite Friends
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
