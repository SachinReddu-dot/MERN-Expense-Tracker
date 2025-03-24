import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-zinc-700 flex items-center gap-10 px-10'>
        <h1 className='text-2xl font-semibold'>LOGO</h1>
        <div className='flex items-center gap-3'>
            <Link to='/'>Create</Link>
            <Link to='/all-user'>All Users</Link>
            <Link to='/update'>Update Details</Link>
        </div>
    </div>
  )
}

export default Navbar