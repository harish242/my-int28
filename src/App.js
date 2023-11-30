import logo from './logo.svg';
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WebPage from './components/webpage';
import './App.css';
import LayOut from './components/layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayOut><WebPage/></LayOut>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
