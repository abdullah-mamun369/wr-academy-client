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
                    <Link to="/login" className="mx-5 btn btn-outline btn-primary">Log In</Link>

                    <Link to="/signup" className="mx-5 btn btn-outline btn-primary">Sign Up</Link>

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" className="toggle toggle-primary" checked />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;