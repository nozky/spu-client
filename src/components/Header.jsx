import React from 'react'
import './header.css'
import UserCount from './UserCount'

const Header = ({userCount}) => {
  return (
    <div className='header'>
        <UserCount userCount={userCount}/>
        <h1><span style={{color: 'yellow'}}>S</span><span style={{color: 'red'}}>P</span>P</h1>
        <p> <span>Solar</span> Power Philippines</p>
        
        
    </div>
  )
}

export default Header
