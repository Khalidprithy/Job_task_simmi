import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-accent text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-40">
                        <li><a href='*'>Home</a></li>
                        <li><a href='*'>About</a></li>
                        <li><a href='*'>Donate</a></li>
                        <li><a href='*'>Blog</a></li>
                        <li><a href='*'>Gallery</a></li>
                        <li><a href='*'>Volunteer</a></li>
                        <li><a href='*'>Events</a></li>
                        <li><a href='*'>Careers</a></li>
                        <li><a href='*'>Contact</a></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-10' src="https://simmifoundation.org/home/images/logo.png" alt="" />
                    <a className="btn btn-ghost capitalize text-xl" href='*'>SIMMI FOUNDATION</a>
                </div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 hidden md:flex hover:-translate-y-1 ease-out duration-150">
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Home</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>About</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Donate</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Blog</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Gallery</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Volunteer</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Events</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Careers</a></li>
                    <li><a className='font-semibold hover:text-secondary hover:scale-110' href='*'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;