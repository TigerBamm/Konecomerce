import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gray-100'>
      
      <nav className="flex justify-between items-center px-10 py-4 bg-gray-400">
        
        
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"/></svg>
            <h1 className="text-l font-bold">ShopCart</h1>
        </div>

        
        <ul className='flex justify-between items-center gap-8 text-xl font-bold text-gray-900'>
          <li><NavLink to={"/"} className="hover:text-indigo-600">Home</NavLink></li>
          <li><NavLink to={"/shop"} className="hover:text-indigo-600">Shop</NavLink></li>
          <li><NavLink to={"/contact"} className="hover:text-indigo-600">Contact</NavLink></li>
          <li><NavLink to={"/about"} className="hover:text-indigo-600">AboutUs</NavLink></li>
        </ul>

        <div className='flex justify-between items-center gap-4'>
          <div className="relative flex items-center">
            <input 
              type="search" 
              placeholder='Search' 
              className='bg-gray-200 rounded-full px-4 py-1 border-none outline-none focus:ring-1 focus:ring-indigo-400 w-48 text-sm'
            />
            <svg className='absolute right-3' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

          <ul className='flex justify-between items-center gap-5 p-3'>
             <li className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
               <a href="#" className="text-xl font-medium">Account</a>
             </li>
             <li className="flex items-center gap-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
               <a href="#" className="text-xl font-medium">Cart</a>
             </li>
          </ul>
        </div>
      </nav>
      
     
    </div>
  )
}

export default Navbar