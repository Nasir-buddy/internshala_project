import React from 'react'

const SeventhPage = () => {
  return (
    <div className='h-[90vh] w-screen flex flex-col items-center justify-center'>
        <div className='w-full h-[30%]  p-10 mt-[50px]'>
            <h1 className='font-semibold text-[2rem] mt-10'>Learning paths based on your answers</h1>
            <p className='text-zinc-600 mt-10 '>Choose one to get started. You can switch anytime.</p>
        </div>
        <div className='w-1/2 h-[50%] flex md:flex-row flex-col items-center justify-center gap-10 mt-20'>
            <div className='relative flex h-36 items-center p-3 border rounded-md'>
                <div className='bg-yellow-500 px-2 absolute top-[-10%] left-1/3  rounded-lg'>
                    Most Popular
                </div>
                <h2 className='text-left '>
                    <span className='font-semibold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probablity.
                </h2>
                <img className='h-full w-[35%] object-contain' src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div> 
            <div className='flex h-36 items-center p-3 border rounded-md'>
                <h2>
                    <span>Mathematical Thinking</span>
                    Build you foundational skills in algebra, geometry, and probability.
                </h2>
                <img className='h-full w-[35%] object-contain' src="https://images.unsplash.com/photo-1619115445441-d6e75309000d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>
    </div> 
  )
}

export default SeventhPage