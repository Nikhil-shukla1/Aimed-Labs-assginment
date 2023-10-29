import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' w-[100%] h-[10%] text-white bg-slate-950 p-3 flex flex-col justify-center items-center '>
      <div className=' flex items-center justify-center gap-5'>
        <Link to='mailto: nikhilshukla311@gmail.com'>
          <img src="gmail.png" alt="" className="gmail h-[10%] w-[85%] px-1" />
        </Link>
        <Link to='https://github.com/Nikhil-shukla1'><img src="github.png" alt="" className="git h-[10%] w-[70%] pl-3" /></Link>
        <Link to='https://www.linkedin.com/in/dev-nikhil/'> <img src="link.png" alt="" className="link h-[10%] w-[85%]" /></Link>
      </div>
      <div>Made By:- Nikhil Shukla❤️</div>
    </div>
  )
}

export default Footer