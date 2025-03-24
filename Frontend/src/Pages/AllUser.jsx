import React from 'react'
import { useState } from 'react'
import Card from '../Components/Card'

const AllUser = () => {

  const [error, setError] = useState('')
  const [data, setData] = useState([])

  const getData = async()=>{
    const response = await axios.get('http://localhost:3000/data-user')
    const result = response

    if(!result){
      setError(result.error)
    }

    if(result){
      setData(result.data)
      setError('')
    }

  }


  return (
    <div className='w-full relative'>
      {error && <div className='w-full fixed top-0 left-0 bg-red-800 h-10 text-center'>{error}</div>}
      <div className='w-full px-10 py-5'>
        <Card/>
      </div>
    </div>
  )
}

export default AllUser