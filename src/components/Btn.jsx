import React from 'react'
import './btn.css'


const Btn = ({className, handle, icon, ref}) => {
  return (
     <i className={className} onClick={handle}>{icon}  </i>
  )
}

export default Btn
