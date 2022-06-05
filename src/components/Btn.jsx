import React from 'react'
import './btn.css'

const Btn = ({className, handle, icon, title}) => {
  return (
     <div className={className}  onClick={handle}>
       <p style={{fontSize: "12px", textAlign: "center"}}>{title}</p>
       <div className='icon' onClick={handle}>
        {icon}
       </div>
     </div>
     
  )
}

export default Btn
