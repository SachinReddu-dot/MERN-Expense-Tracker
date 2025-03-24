import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom' 

const Create = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')

  const navigate= useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const userData = {name, email, age}

    const response = await axios.post('http://localhost:3000/create-user', userData)
    const result = response
    if(!result){
      return console.log(result.error)
    }
    if(result){
      console.log(result)
      navigate('/all-user')
      
      setName('')
      setEmail('')
      setAge('')
    }

  }

  return (
    <>
      <div className='w-full flex justify-center'>
        <form onSubmit={handleSubmit} className='w-1/3 px-7 py-10 h-2/3 rounded-2xl bg-zinc-900 mt-20 flex flex-col items-center justify-between'>
          <h1 className='text-3xl font-bold text-center mb-10'>User Data</h1>
          <input onChange={(e)=> setName(e.target.value)} value={name} placeholder='Name'  className='mb-3 w-full p-3 outline-none bg-zinc-800 rounded-xl' type="text" />
          <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder='Email' className='mb-3 w-full p-3 outline-none bg-zinc-800 rounded-xl' type="email" />
          <input onChange={(e)=> setAge(e.target.value)} value={age} placeholder='Age' className='mb-3 w-full p-3 outline-none bg-zinc-800 rounded-xl' type="number" />
          <button className='mt-3 w-2/3 py-3 outline-none bg-blue-700 rounded-xl'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Create