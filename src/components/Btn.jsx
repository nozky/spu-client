import React from 'react'
import './btn.css'

const Btn = ({className, handle, icon, ref}) => {
  return (
     <div className={className}  onClick={handle}>
       <p>Menu</p>
       <i  onClick={handle}>{icon} </i>
     </div>
     
  )
}

export default Btn
