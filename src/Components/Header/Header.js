import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);

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
                        <label className="cursor-pointer">
                            <span className="label-text">Dark Mode</span>
                            <input type="checkbox" className="toggle" />
                        </label>
                    </div>
                    <div className="w-10 rounded-full">
                        {user.photoURL ?
                            <img src={user.photoURL} alt='' />
                            : <FaUserAlt />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;