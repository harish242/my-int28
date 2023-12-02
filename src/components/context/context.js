// MyContext.js
import React, { createContext, useContext, useRef, useState } from 'react';
import {signInWithPopup,signOut} from "@firebase/auth"
import {auth,provider} from '../../firebase.js'

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
//   const [user, setUser] = useState(()=>JSON.parse(localStorage.getItem('name'))||null);
const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('name');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing user from local storage:', error);
      return null;
    }
  });
  const[email,setEmail]=useState('')

  const ref=useRef()

  const handleLogin = async () => {
    // Implement your login logic here
    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user.displayName);
          // Show "Logged in successfully" alert
          console.log(result)
          setEmail(result.user.email)

          alert('Logged in successfully!');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        setTimeout(()=>{
        alert('Logged out succesfully')         
        },1000)
    })
      .catch((error) => console.log(error));
  };

  const contextValue = {
    user,
    handleLogin,
    handleLogout,
    ref,
    email
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};

export { MyContextProvider, useMyContext };
