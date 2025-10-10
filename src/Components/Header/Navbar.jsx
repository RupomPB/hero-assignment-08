import React from 'react';

import logoImg from '/logo.png'
import github from '/github.png'
import { Link, NavLink } from 'react-router';


const Navbar = () => {

  const classLinks =({isActive})=>
    `ml-5 text-lg font-bold  ${isActive ? 'text-[#7942e4] border-b-1 border-[#7942e4]': 'text-black'}`
  

  const links = <>
    <NavLink to='/' className={classLinks}>Home</NavLink>
    <NavLink to='/apps' className={classLinks}>Apps</NavLink>
    <NavLink to='/installedapps' className={classLinks}>Installation</NavLink>
  </>

    return (
      <div className='bg-base-100 shadow-sm '>

        <div className="navbar    max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <div className='flex items-center'>
    <img className='w-10 h-10 m-2'  src={logoImg}></img>
        <Link to='/'>
    <span className="  btn-ghost text-xl font-bold  text-[#7c44e9]">HERO.IO</span>
        </Link>
    </div>
  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>

  <div className="navbar-end ">
  
  <a href='https://github.com/RupomPB' target='blank'>

     <span className="btn bg-[#7c44e9]"><img src={github}></img> <p className=' text-white'>Contribute</p></span>
  
  </a>
  </div>
</div>
        
      </div>

        
    );
};

export default Navbar;