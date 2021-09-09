import React from 'react';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

export function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gradient-to-br from-black to-coolgray-900 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <div className="text-2xl font-heading font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer">
                DJ EVENTS
              </div>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center
              ${navbarOpen ? ' flex' : ' hidden'}`}
            id="example-navbar-danger"
          >
            <ul className="flex w-full flex-col lg:flex-row list-none lg:ml-10">
              <li className=" py-3 self-center">
                <a
                  className="px-3 py-2 flex   items-center text-xs uppercase font-bold leading-snug text-white text-right  hover:opacity-75"
                  href="#pablo"
                >
                  <span className="">Find A Venue</span>
                </a>
              </li>
              <hr className="border-white/20 lg:hidden" />
              <li className="py-3 self-center">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="">Manage Booking</span>
                </a>
              </li>
              <hr className="border-white/20 lg:hidden" />
              <li className="py-3 self-center ">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="">Manage/Add Venue</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
