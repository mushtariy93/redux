import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="absolute top-0 left-0 w-full  flex justify-between items-center bg-yellow-50">
        <div className="text-3xl  ml-10 font-bold text-gray-800">KUMUSH</div>
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/">
            Profile
          </NavLink>
          <NavLink
            to="/login"
          >
            Login
          </NavLink>
          <NavLink to="/register" className="text-gray-700 hover:text-gray-900">
            Register
          </NavLink>
          <div className="gap-5 m-4 p-5">
            <Link to="/login">
              <button className="border border-black py-2 px-4 rounded-lg  hover:bg-green-600 transition duration-200">
                Sign in
              </button>
            </Link>
            <Link to="/register">
              <button className="border border-black py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
