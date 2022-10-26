import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <div className="navbar bg-base-100 drop-shadow-md">
                <div className="navbar-start">
                    <Link to="/" className="normal-case text-xl">RW Academy</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="mx-5 py-1.5 px-4 border transition duration-180 ease-out md:ease-in border-amber-500 text-amber-500 hover:bg-amber-500 rounded-md hover:text-white">Log In</Link>

                    <Link to="/signup" className="py-1.5 px-4 border transition duration-180 ease-out md:ease-in border-amber-500 text-amber-500 hover:bg-amber-500 rounded-md hover:text-white">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;