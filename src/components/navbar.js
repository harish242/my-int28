import React,{useEffect,useState} from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import '../styles/navbar.css';
import {signInWithPopup} from "@firebase/auth"
import {auth,provider} from '../firebase.js'

export default function NavBar() {
  const[state,setState]=useState('')
  useEffect(() => {
    // Add a global click event listener
    const handleClickOutside = (event) => {
      // Check if the clicked element is not the sign-in button
      if (!event.target.closest('.but2')) {
        // Check if the user is not logged in
        if (!auth.currentUser) {
          // Show the sign-in popup
          signInWithPopup(auth, provider)
            .then((result) => {
              setState(result.user.displayName);
              console.log(result)
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    };
    console.log('l/27',state)

    // Attach the click event listener
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [state]);
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
