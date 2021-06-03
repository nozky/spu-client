import React from 'react'
import { MdSupervisorAccount } from 'react-icons/md'
import './userCount.css'

const UserCount = ({userCount}) => {
  return (
    <div className='user-count'>
      <MdSupervisorAccount/> {userCount}
    </div>
  )
}

export default UserCount
