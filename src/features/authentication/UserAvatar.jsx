import React from 'react'
import UseUser from './UseUser'

const UserAvatar = () => {
  const{user}= UseUser()

  return (
    <div className='flex items-center gap-x-1 text-secondary-600'>
        <img src="/user.jpg" alt=""  className='w-6 h-6 rounded-full object-cover '/>
        <span>{user?.name}</span>
    </div>  )
}

export default UserAvatar