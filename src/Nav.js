import React, { useEffect, useState } from 'react'
import "./nav.css"
import logo from "./images/netflixlogo.png"
import {useNavigate} from "react-router-dom"
function Nav() {
  const [show,setShow]=useState(false)
  const navigate=useNavigate()
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }
useEffect(()=>{
  window.addEventListener("scroll",transitionNavBar)
  return()=>{
    window.removeEventListener("scroll",transitionNavBar)
  }
},[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img onClick={()=>navigate("/")}className='nav__logo'src={logo} alt="" />
        <img onClick={()=>navigate("/profile")}  className='nav__avatar'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" /> 
      </div>

    </div>
  )
}

export default Nav