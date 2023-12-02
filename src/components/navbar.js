
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../styles/navbar.css';
import { useMyContext } from './context/context'

export default function NavBar() {
  const { user, handleLogin, handleLogout,ref } = useMyContext();
  return (
    <div id="navbar">
      <div id="container">
        <div id="title">TripWeb</div>
        <ul id='unorder'>
                <li>
                    <div>
                    <span>Home</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
                <li>
                <div>
                    <span>Categories</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
                <li>
                <div>
                    <span>Destinations</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
                <li>
                <div>
                    <span>Blog</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
                <li>
                <div>
                    <span>Pages</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
                <li>
                <div>
                    <span>DashBoard</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
                <li>
                <div>
                    <span>Contact</span>
                    <span><IoMdArrowDropdown/></span>
                    </div>
                </li>
             </ul>
        <div id="buttons">
          <button className="but1">
            {user ? `Welcome, ${user.slice(0,13)}` : 'Become An Expert'}
          </button>
          <button className="but2" onClick={user ? handleLogout : handleLogin} ref={ref}>
            {user ? 'Logout' : 'Sign In / Register'}
          </button>
        </div>
      </div>
    </div>
  );
}
