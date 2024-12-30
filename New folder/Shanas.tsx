interface Props{
    username: string;
    email: string;
    password: string;
}

import React from 'react'

const Shanas = ({test}:{test:Props}) => {
  return (
    <div className='flex flex-col'>
        
    <p>{test.email}</p>
    <p>{test.password}</p>
    <p>{test.username}</p>
    </div>
  )
}

export default Shanas