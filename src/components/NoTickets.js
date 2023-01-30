import React from 'react';
import Robot from '../images/robot.gif';

const NoTickets = () => {

  const name=localStorage.getItem("name");
  
  return (
    <div className="flex items-center justify-center flex-col">
        <img src={Robot} alt="loader" className="h-[300px] object-contain"/>
        <p className="mt-[0px] font-epilogue font-bold text-[20px] text-black text-center">Dear, {name}<br/> You haven't raised any queries yet...</p>
    </div>
  )
}

export default NoTickets