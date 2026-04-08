import React, { useEffect } from 'react'
import'./index.css'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card'


const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setindex] = useState(1)
  const [loading, setLoading] = useState(false)
  
   const getData = async () => {
  try {
    setLoading(true)
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  } catch (error) {
    console.error(error)
  } finally {
    setLoading(false)
  }
}
useEffect(() => {
  getData();
}, [index])

useEffect(() => {
   console.log(userData)
}, [userData])

  let printUserData;

if (loading) {
  printUserData = (
    <div className="w-full flex justify-center items-center h-[100vh]">
      <div className="h-10 w-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
} else if (userData.length > 0) {
  printUserData = userData.map((el, idx) => {
    return (
      <div key={idx} className='h-55 w-56'>
        <Card el={el} />
      </div>
    )
  })
}

  return (
    <div className='bg-black h-screen text-white  overflow-auto px-6 py-4 '>
       
        <div className='flex flex-wrap gap-5 h-[210%]'>
          {printUserData}
        </div>
        <div className=' bottom-10 flex justify-center items-center gap-6 p-4 ' >
          <button   disabled={index === 1} style={{opacity : index == 1 ? 0.5 : 1}} 
            className=' bg-amber-400 text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold' onClick={()=>{
            setindex(index-1)
            setUserData([])

          }
        }>Prev</button>
        <h4>Page {index} </h4>
        <button className=' bg-amber-400  text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'onClick={()=>{
            setindex(index+1)
            setUserData([])
            }
          }>Next</button>
          
        </div>
    </div>
  )
}

export default App