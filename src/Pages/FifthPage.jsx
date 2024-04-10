import React from 'react'
import ProgressBar from '../Components/ProgressBar'
import Button from '../Components/Button'

const FifthPage = ({setstep}) => {
  return (
    <div>
        <ProgressBar/>
        <div className='w-full h-full m-auto flex items-center'>
          <div className='flex md:flex-row flex-col items-center justify-center mt-24'>
          <div className='flex justify-center'>
                <img className='w-1/2  aspect-auto' src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='text-left h-[50%] w-[50%] '>
                <h1 className='font-semibold text-3xl mb-10 mt-10'>You're on your way!</h1>
                <p className='mb-5'>⭐⭐⭐⭐⭐</p>
                <p className='italic text-2xl'>
                "Through its engaging and well-structured courses, Brilliant has to  understant. I now feel confident approaching both technical job interviews and real world problem solving situations."
                </p>
            </div>
          </div>
        </div>
        <Button setstep={setstep} nextstep={6}/>
    </div>
  )
}

export default FifthPage 