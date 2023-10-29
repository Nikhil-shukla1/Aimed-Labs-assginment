import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
        <div className="flex justify-evenly items-center text-white w-screen bg-slate-950 h-[8%] absolute top-0 z-10">
            <img src="vite.svg" alt="" className=' h-[80%]' />
            <ul className=" flex justify-center items-center gap-3 text-xl font-normal" >
                <NavLink to='/register' className={({isActive}) => ` ${(isActive === true)?"bg-red-500 p-1 rounded-lg w-[100px] flex justify-center items-center":""}`}>Register</NavLink>
                <NavLink to='/' className={({isActive}) => ` ${(isActive === true)?"bg-red-500 p-1 rounded-lg w-[100px] flex justify-center items-center":""}`}>Login</NavLink>
            </ul>
        </div>
    
  )
}

export default Header;