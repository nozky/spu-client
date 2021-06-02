import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header' style={{backgroundColor: 'blue', color: 'white'}}>
        <h1><span style={{color: 'yellow'}}>S</span><span style={{color: 'red'}}>P</span>P</h1>
        <p> <span>Solar</span> Power Philippines</p>
    </div>
  )
}

export default Header
