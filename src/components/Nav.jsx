import React, { useRef, useEffect } from 'react'
import './nav.css'
import  Btn  from './Btn'
import { CgCloseO } from 'react-icons/cg'
import {  Link } from 'react-router-dom'


const Nav = () => {
  
  const nav = useRef()

  // load event
 useEffect(()=>{
   if(nav.current){
     nav.current.querySelector('.navCloseBtn').addEventListener('click',()=>{ nav.current.classList.remove("show") })
     nav.current.addEventListener('click',()=> {  nav.current.classList.remove("show") })
   }  
 })

  return (
    <div className='nav' ref={nav}>
      <ul>
        <li><Link to="/">Map</Link></li>
        <li><Link to="/login">Profile</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Btn className={'navCloseBtn'} icon={ <CgCloseO /> }  />
    </div>
  )
}

export default Nav
