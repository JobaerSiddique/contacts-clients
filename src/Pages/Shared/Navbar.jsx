import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/neutron.png'
const Navbar = () => {
    const menuItem = <>
        <li className='font-bold'><Link to='addcontacts'>Add Contacts</Link></li>
        <li className='font-bold'><Link to='allcontact'>All Contacts</Link></li>

    </>

    return (
        <div>
            <div className="navbar bg-cyan-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className='flex justify-center items-center gap-2'><img className='size-8 lg:size-12' src={logo} alt="" /><span className='lg:font-semibold font-serif'>Neutron Ltd</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;