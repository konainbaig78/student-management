import React from 'react'
import { useNavigate }  from 'react-router-dom'


const home = () => {
    const navigate= useNavigate();
  return (
    <div className='bg-[#50A3A2] flex flex-col items-center justify-center p-[2%]  text-white'>
        <img className='rounded-full w-[200px] h-[200px]' src="./home.jpg" alt="favicon" />
      <h1 className='font-bold text-5xl font-serif m-4'>Welcome to student Management App</h1>
      <button className='border-2 border-white rounded-2xl p-3 my-2.5 w-[10rem] h-[4rem] transition  duration-300 ease-in-out hover:scale-110' onClick={()=>{
        navigate('/form')
      }}>Student form</button>
      <button className='border-2 border-white rounded-2xl p-3 my-2.5 w-[10rem] h-[4rem]  transition  duration-300 ease-in-out hover:scale-110' onClick={()=>{
        navigate('/list')
      }}>Student list</button>
      <button className='border-2 border-white rounded-2xl p-3 my-2.5 w-[10rem] h-[4rem]  transition  duration-300 ease-in-out hover:scale-110' onClick={()=>{
        navigate('/display')
      }}>Student Display</button>

    </div>
  )
}

export default home
