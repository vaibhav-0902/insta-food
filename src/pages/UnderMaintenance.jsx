import React from 'react'
import bg from '../assets/construction.png'
import { Link } from 'react-router-dom'

const UnderMaintenance = () => {
  return (
    <div className="flex my-2 text-3xl text-center flex-col items-center justify-center">
      <h1>Sorry :(</h1>
      <h1>This page is Under Construction. come back after some time...</h1>
      <div className="flex my-5 justify-center items-center">
        <Link to="/home">
          <button
            className='flex text-xl justify-center  transition-all bg-orange-500 border-none hover:text-white hover:bg-orange-400 text-black items-center py-2 rounded-full'>
            Home
          </button>
        </Link>
      </div>
      <img className='object-cover h-[100vh]' src={bg} alt="" />

    </div>
  )
}

export default UnderMaintenance;