import React, { useRef } from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router'

import gsap from 'gsap'



function Errorpages() {
    const navigate = useNavigate()
    console.log(navigate)
    const handleGoBack = ()=>{
        navigate(-1)
    }
    const error = useRouteError()
    if(error.status ===404){
  return (
    <section className='h-screen w-screen relative text-white '>
          
     <div className='flex items-center h-full w-full justify-center flex-col '>
        <figure className=" h-[30rem] w-[30rem] rounded-4xl " >
            <img className='w-full h-full object-cover ' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?ga=GA1.1.2041506368.1709982585&semt=ais_hybrid" alt="error" />
        </figure>
        <div className='text-center text-white '>
            <p className='text-[2rem] liter-regular mb-[1rem] '>
                The page you were looking for could not be found-
            </p>
            <div className='flex items-center text-gray-200 justify-around'>
            <button className='cursor-pointer w-[15rem] h-[4rem] bg-red-800 rounded-[10px] hover:bg-red-600 ' onClick={handleGoBack}>Go Back</button>
            <NavLink to='/home'>
            <button className='cursor-pointer  w-[15rem] h-[4rem] bg-green-900 rounded-[10px] hover:bg-green-600 '>Back to Home page</button>
             </NavLink>
            </div>
                 </div>
        </div>            
    </section>
  )
}
}
export default Errorpages
