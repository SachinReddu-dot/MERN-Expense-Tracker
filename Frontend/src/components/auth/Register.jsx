import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [error, setError] = useState('')
  
  const handleLogin = (e)=>{
    e.preventDefault()
  
      if(!email || !password || !name || !confPassword){
        setError('All fields are Required')
        return
      }

      if(password.length < 4){
        setError('Password length must be alteast 4')
        return
      }

      if(password !== confPassword){
        setError('Confirm passowrd dosent match')
        return
      }
  
      setName('')
      setEmail('')
      setPassword('')
      setConfPassword('')
      setError('')
  
    }

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <form className='px-10 py-5 h-fit w-2/3 flex items-center flex-col gap-3 rounded-xl bg-zinc-800'>
          <h1 className='text-4xl font-semibold mb-8'>Register</h1>
          <input onChange={(e)=> setName(e.target.value)} value={name} placeholder='Full Name' className='w-full outline-none bg-zinc-900 rounded-xl p-3' type="text" />
          <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Email' className='w-full outline-none bg-zinc-900 rounded-xl p-3' type="text" />
          <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder='Password' className='w-full outline-none bg-zinc-900 rounded-xl p-3' type="password" />
          <input onChange={(e)=> setConfPassword(e.target.value)} value={password} placeholder='Confirm Password' className='w-full outline-none bg-zinc-900 rounded-xl p-3' type="password" />          
          {error.length > 0 ? <h1 className='text-red-600 text-left'>{error}</h1> : ''}
          <button className='w-full outline-none mt-3 bg-blue-800 rounded-xl p-3'>Register</button>
          <h1>Already have an Account? <Link to='/auth/login' className='text-blue-700'>Login</Link></h1>
        </form>
      </div> 
    </>
  )
}

export default Register