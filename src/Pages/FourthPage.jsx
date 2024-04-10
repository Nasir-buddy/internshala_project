import React from 'react'
import ProgressBar from '../Components/ProgressBar'
import Button from '../Components/Button'

const FourthPage = ({setstep}) => {
    const data = [
        {
            image: "\pic1.png", 
            title: "Arthmetic",
            text: "Introductory"
        },
        {
            image: "\pic2.png", 
            title: "Basic Algebra",
            text: "Fundational"
        },
        {
            image: "\pic3.png", 
            title: "Intermediate Algebra",
            text: "Introductory"
        },
        {
            image: "\pic4.png", 
            title: "Calculus",
            text: "Advanced"
        },

    ]
    return (
        <div >
            <ProgressBar step={4} setstep={setstep}/>
            <div className='w-[90vw] m-auto '>
                <div className=' h-[25%] w-full flex flex-col items-center justify-center'>
                    <h1 className='font-semibold text-3xl mb-10 mt-12'>What is you math comfort level?</h1>
                    <p className='font-medium'>Choose the higest level you feel confident in - you can always adjust later.</p>
                </div>
                <div className='p-4 flex gap-4 flex-wrap items-center justify-center mb-10'>
                    {data.map((item, index)=>(
                        <div key={index} className=' w-[20vh] h-[20vh] flex flex-col items-center justify-center border-2 hover:border-yellow-300 rounded-md mt-32 '>
                        <img src={item.image} alt="" />
                        <h2 className='font-semibold'>{item.title}</h2>
                        <h2 className='font-normal text-zinc-500'>{item.text}</h2>
                    </div>
                    ))}
                </div>
            </div>
            <Button setstep={setstep} nextstep={5}/>
        </div>
    )
}

export default FourthPage