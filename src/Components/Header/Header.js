import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { FaUserAlt } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const [toggleButton, setToggleButton] = useState();

    const toggleChange = event => {
        const toggleButton = event.target.checked;
        setToggleButton(toggleButton)
    }

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div className='shadow-md hover:shadow-xl w-screen'>
            <div className='container mx-auto px-4 '>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/courses">Courses</Link></li>
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/login" className='text-primary'>Login</Link></li>
                                <li><Link to="/signup" className='text-primary'>Signup</Link></li>

                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">
                            <img src="https://i.postimg.cc/qvRZhKBS/favicon.png" className="h-8 w-8 mr-4" />
                            <span className='lg:text-2xl font-bold text-primary'>WR</span> <span className='hidden lg:grid lg:text-2xl font-bold ml-3'>Academy</span> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>

                        </ul>
                    </div>

                    <div className="form-control navbar-end">
                        <label className="label cursor-pointer">
                            <span className="label-text text-sm mr-3 opacity-60 sm:ghost">
                                {
                                    toggleButton ? 'Dark' : 'Light'
                                }
                            </span>
                            <input onChange={toggleChange} type="checkbox" className="toggle toggle-primary" />
                        </label>
                    </div>

                    <div className="lg:navbar-end">
                        {
                            user?.uid ?
                                <>
                                    <div className='dropdown dropdown-end'>
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div>
                                                {
                                                    user?.photoURL ?
                                                        <img className="w-10 rounded-full" src={user.photoURL} alt='' />
                                                        : <FaUserAlt />
                                                }
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                            {
                                                user?.displayName ?
                                                    <li className='mr-2 text-sm font-medium text-center'>{user?.displayName}</li>
                                                    : <li>
                                                        <Link className="justify-between">
                                                            {/* {user?.email.slice(0, -10)} */}
                                                            {user?.email}
                                                        </Link>
                                                    </li>
                                            }


                                            <li><button onClick={handleSignOut}><Link>Logout</Link></button></li>
                                        </ul>
                                    </div>
                                </>
                                :
                                <div className='hidden lg:flex'>
                                    <Link to="/login" className="btn btn-outline btn-primary mr-2">Login</Link>
                                    <Link to="/signup" className="btn btn-outline btn-primary">Signup</Link>
                                </div>
                        }
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Header;