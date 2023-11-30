import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";
export default function LayOut(props){
    return(
        <>
        <NavBar/>
        {props.children}
        <Footer/>
        </>
    )
}