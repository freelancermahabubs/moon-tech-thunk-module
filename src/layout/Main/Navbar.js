import React, {useState} from "react";
import {Link} from "react-router-dom";
import {BsFillCartFill} from "react-icons/bs";
import {IoIosListBox} from "react-icons/io";
import {useSelector} from "react-redux";
import {Transition} from "@headlessui/react";

const Navbar = () => {
  // const cart = useSelector((state) => state.product);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5">
      <div className="flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1 className="mt-3">Moon Tech</h1>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-3 mt-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/top-rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <Link to="/">
            <li title="Wishlist" className="bg-indigo-500 p-2 rounded-full">
              <IoIosListBox className="text-white" />
            </li>
          </Link>
          <Link to="/cart">
            <li title="cart" className="bg-indigo-500 p-2 rounded-full">
              <span className="text-white  rounded-full bg-red-600 px-1 absolute top-2 font-semibold">
                {/* {cart?.length} */}
              </span>
              <BsFillCartFill className="text-white " />
            </li>
          </Link>
        </ul>
      </div>

      {/* Hamburger Menu Content */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="mt-4 ">
        <div className="md:hidden bg-gray-100 rounded-md ">
          <ul className="flex flex-row p-4 gap-3 z-50 mt-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/top-rated">Top Rated</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <Link to="/">
              <li
                title="Wishlist"
                className="bg-indigo-500 w-8 p-2 rounded-full">
                <IoIosListBox className="text-white" />
              </li>
            </Link>
            <Link to="/cart">
              <li title="cart" className="bg-indigo-500 p-2 w-8 rounded-full">
                {/* {cart.length ? (
                  <span className="text-white  rounded-full bg-red-600 px-1 absolute top-[8%] font-semibold">
                    {cart?.length}
                  </span>
                ) : (
                  ""
                )} */}
                <BsFillCartFill className="text-white " />
              </li>
            </Link>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
