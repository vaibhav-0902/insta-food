import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

    const [user, setUser] = useState({
        email: "admin@ok.com",
        password: "password"
    });
    const navigate = useNavigate();

    const emailChange = (e) => {
        console.log("email", user.email);
        setUser({ ...user, email: e.target.value });
    }
    const passwordChange = (e) => {
        console.log("email", user.password);
        setUser({ ...user, password: e.target.value });
    }
    const handleClick = () => {
        console.log("User", user);
        if (user.email !== "admin@demo.com" && user.password !== "password") {
            alert("Input fields are required!!")
            navigate('/')
        }
        else {
            navigate("home")
            setUser(user);
        }
    }
    return (
        <div data-aos="fade-up" className="relative bg-orange-50 flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-white m-auto rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div data-aos="fade-right" className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            value={user.email}
                            onChange={emailChange}
                            className="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div data-aos="fade-left" className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            value={user.password}
                            onChange={passwordChange}
                            className="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <p className="text-xs text-orange-500 hover:underline">
                        <Link to="/">
                            Forget Password?
                        </Link>
                    </p>
                    <div className="mt-6">
                        <button onClick={handleClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors border-none duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-500">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/"
                        className="font-medium text-orange-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
