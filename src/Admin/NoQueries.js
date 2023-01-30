import React from 'react';
import Robot from '../images/robot.gif';

const NoQueries = () => {

  
  return (
    <div className="flex items-center justify-center flex-col">
        <img src={Robot} alt="loader" className="h-[300px] object-contain"/>
        <p className="mt-[0px] font-epilogue font-bold text-[20px] text-black text-center"> This user haven't raised any queries yet...</p>
    </div>
  )
}

export default NoQueries