import { useState } from "react";
import { navItems } from "../Constants/index.js";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Original Navbar - UNTOUCHED */}
      <div className="w-full flex-center fixed z-50 top-0 left-0 md:p-0 px-5">
        <div className="container md:my-10 my-5 flex items-center justify-between">
          <img
            src="/images/logo.svg"
            alt="logo"
            className="md:size-12 size-10 object-cover object-center"
          />

          {/* Desktop Navigation - already responsive */}
          <div className="md:flex items-center gap-7 hidden">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
                 after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                  hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                <a className="gradient-title text-lg" href={item.href}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden block z-50">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX size={28} className="text-white" />
              ) : (
                <FiMenu size={28} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-[#1a1a2e] shadow-lg p-8 pt-24 transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-medium border-b border-gray-700 pb-2"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
