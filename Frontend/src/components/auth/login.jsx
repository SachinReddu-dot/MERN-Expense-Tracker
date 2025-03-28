import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e)=>{
    e.preventDefault()

    if(!email || !password){
      setError('All fields are Required')
      return
    }

    setEmail('')
    setPassword('')
    setError('')



  }

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
      <form onSubmit={handleLogin} className='px-10 py-5 h-fit w-2/3 flex items-center flex-col gap-3 rounded-xl bg-zinc-800'>
      <h1 className='text-4xl font-semibold mb-8'>Login</h1>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Email' className='w-full outline-none bg-zinc-900 rounded-xl p-3' type="text" />
          <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Password' className='w-full outline-none bg-zinc-900 rounded-xl p-3' type="text" />
          {error.length > 0 ? <h1 className='text-red-600 text-left'>{error}</h1> : ''}
          <button className='w-full outline-none mt-2 bg-blue-800 rounded-xl p-3'>Login</button>
          <h1>Don't have an Account? <Link to='/auth/register' className='text-blue-700'>Register</Link></h1>
        </form>
      </div> 
    </>
  )
}

export default login