import React from "react";
import { GiFastBackwardButton } from "react-icons/gi";
const ProgressBar = ({ step, setstep }) => {


  return (
    <div className="flex items-center justify-evenly min-h-20">
      {step === 1 ? null :
        <button 
        onClick={() => setstep(prev => prev - 1)}>
          <GiFastBackwardButton />
        </button>
      }
      <div className="bg-zinc-600 w-[90vw] rounded-xl ">
        <div
          style={{ width: 20 * step + '%' }}
          className={`bg-green-600  rounded-xl min-h-1`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
