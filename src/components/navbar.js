import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../styles/navbar.css';

export default function NavBar() {
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
          <button className="but1">Become An Expert</button>
          <button className="but2">Sign In / Register</button>
        </div>
      </div>
    </div>
  );
}
