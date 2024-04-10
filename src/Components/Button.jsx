import React from 'react'

const Button = ({setstep, nextstep}) => {
    return (
        <button onClick={()=> setstep(nextstep)} className="border-solid bg-black text-white hover:bg-zinc-700 hover:text-white p-2 px-8  m-auto mt-4 rounded-xl mb-10">
            Continue
        </button>
    )
}

export default Button