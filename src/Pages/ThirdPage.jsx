import React from 'react'
import ProgressBar from '../Components/ProgressBar'
import Button from '../Components/Button'
const ThirdPage = ({setstep}) => {
    return (
        <>
            <ProgressBar step={3} setstep={setstep}/>
            <div className='w-full md:w-[90vw] h-auto md:h-[70vh] m-auto mt-12 flex flex-col md:flex-row items-center justify-around'>
                <div className='w-full md:w-[50vw] flex items-center justify-center'>
                    <img src="/images/Screenshot 2024-04-07 220933.png" alt="" className="w-full md:w-auto" />
                </div>
                <div className='w-full md:w-[50vw] flex flex-col items-start justify-center mt-4 md:mt-0 p-4'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-10'>You're in the right place</h1>
                    <p className='text-start font-medium text-sm md:text-base lg:text-lg max-w-full md:max-w-[25vw]'>
                        Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
                    </p>
                </div>
            </div>
            <Button setstep={setstep} nextstep={4}/>
        </>
    )
}

export default ThirdPage
