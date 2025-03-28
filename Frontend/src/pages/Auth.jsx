import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <>
      <div className='w-full h-screen flex relative overflow-hidden '>
        <div className='w-1/2 h-full relative'>
          <Outlet/>
        </div>
        <div className='w-1/2 h-full'>
          <img className='w-full h-full object-center object-cover' src="https://images.wallpaperscraft.com/image/single/lamborghini_aventador_lp7004_94945_3840x2400.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Auth