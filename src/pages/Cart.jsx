import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (<>
        <p className="text-red-500 font-semibold bg-red-100 text-center">This page Not working as it is just a Demo page to show the user's cart</p>
        <div className="min-h-screen bg-gray-100 pt-10">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div data-aos-duration="1000" className="rounded-lg md:w-2/3">
                    <div data-aos="fade-left" className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60" alt="product" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0 text-justify mx-4">
                                <h2 className="text-lg font-bold text-gray-900">Double Cheeseburger</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore facilis ducimus consectetur veniam magni, vitae voluptatum est sapiente temporibus eligendi totam architecto consequuntur fuga quo ratione harum laudantium repellendus expedita ex exercitationem. Possimus, tempora est sint asperiores laborum fugiat repellat!</p>
                            </div>
                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center border-gray-100">
                                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"> - </span>
                                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"> + </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="text-sm">200 $</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="product" className="w-full rounded-lg sm:w-40" />
                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div className="mt-5 sm:mt-0  text-justify mx-4">
                                <h2 className="text-lg font-bold text-gray-900">Supreme Pizza</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum aspernatur corporis adipisci veritatis eveniet laboriosam maxime voluptas earum fugiat sit enim facere nobis obcaecati magni, veniam quam suscipit praesentium temporibus officia tempore illo! Ab quia at tenetur reiciendis magni! Exercitationem.</p>
                            </div>
                            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div className="flex items-center border-gray-100">
                                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-500 hover:text-blue-50"> - </span>
                                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-500 hover:text-blue-50"> + </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="text-sm">200 $</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-right" className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">$ 400</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-700">Shipping</p>
                        <p className="text-gray-700">$ 10</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div className="">
                            <p className="mb-1 text-right text-lg font-bold">$ 410 </p>
                            <p className="text-sm text-gray-700">including VAT</p>
                        </div>
                    </div>
                    <Link to="/maintenance">
                        <button className="mt-6 w-full transition-all outline-none border-none rounded-md bg-gray-200 py-1.5 font-semibold hover:bg-orange-500">Check out</button>
                    </Link>
                    <Link to="/home">
                        <button className="mt-6 w-full transition-all outline-none border-none rounded-md bg-gray-200 py-1.5 font-semibold hover:bg-orange-500">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    </>

    )
}

export default Cart