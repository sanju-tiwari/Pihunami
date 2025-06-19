import React, { useRef } from 'react'
import { NavLink } from 'react-router'
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbCarFan } from "react-icons/tb";
import { SiWish } from "react-icons/si";

function Header() {
   const handleout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loggedInUser");
    window.location.href = "/login";
  };

  return (
    <>
  <header className = "w-full h-[3rem] relative z-20 flex items-center p-[1rem] justify-between transparent text-white " >
      <div className=' hidden md:flex items-center justify-center gap-[2rem]  '>
      <NavLink  to="/home"  className="text-[0.8rem] exo-2" >MOVIE</NavLink>
      <NavLink to="/anime" className="text-[0.8rem] exo-2"  >ANIME</NavLink> 
      <NavLink to="/wishlist" className="text-[0.8rem] exo-2 ">
    <span className="text-sm">WISHLIST</span>
  </NavLink>    
    </div>
      <NavLink to="/home" >
     <h1 className="text-[1rem] dr-sugiyama-regular  " >Pihunami🤍 </h1>
     </NavLink>
    <button onClick={handleout} className="w-[5rem] text-[0.7rem] md:text-[1rem] md:w-[10rem] h-[2rem] rounded-4xl border-2 border-red-500" > LOGOUT </button>
    </header>
  <div className="bottom-0 left-0 w-full z-99 bg-transparent backdrop-blur-md md:bg-black fixed    text-white flex justify-around py-3 md:hidden">
  <NavLink to="/home" className="flex flex-col items-center text-white">
  <BiSolidCameraMovie />
    <span className="text-sm">MOVIE</span>
  </NavLink>
  <NavLink to="/anime" className="flex flex-col items-center text-white">
  <TbCarFan />
    <span className="text-sm">ANIME</span>
  </NavLink>
  <NavLink to="/wishlist" className="flex flex-col items-center text-white">
  <SiWish />
    <span className="text-sm">WISHLIST</span>
  </NavLink>

</div>
</>



  )
}

export default Header
