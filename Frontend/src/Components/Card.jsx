import React from 'react'

const Card = ({data}) => {
  return (
    <div className='w-1/3 h-2/3 bg-zinc-700 rounded-2xl overflow-hidden py-10 px-5 flex items-center justify-center flex-col'>
        <h1 className='text-3xl font-semibold'>title</h1>
        <h2 className='text-xl font-medium mt-2'>email</h2>
        <div className='w-full flex items-center justify-center gap-5 mt-3'>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
  )
}

export default Card