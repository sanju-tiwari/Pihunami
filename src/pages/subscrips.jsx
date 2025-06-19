import { useEffect, useState } from 'react';
import movieapi from '../../api/movie.json';
import { NavLink, useParams } from 'react-router';
import { FaCcMastercard } from "react-icons/fa";
import { Check, X } from 'lucide-react';
import { VscPassFilled } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { TbHexagonLetterPFilled } from "react-icons/tb";
import { RiMastercardLine } from "react-icons/ri";
import { IoIosWifi } from "react-icons/io";
import { IoIdCard } from "react-icons/io5";
import tick from "../../public/img2/tick.png"

function Subscrips() {
  const { movie } = useParams();
  const [fromfill ,setformfill ] = useState(false)
  const [fill , setfill ] = useState({
    cardNumber: '',
    cvc: '',
    expiryMonth: '',
    expiryYear: '',
    password: '',
  })
  const [data, setdata] = useState(null);
  const [show , setshow] = useState()
  const [color, setcolor] = useState('free');
  const [price, setPrice] = useState('499/3month');
  const [activePlan, setActivePlan] = useState('Quarterly');


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("subscribed", "true");
    localStorage.setItem("redirectToAnime", "true");
    navigate(`/home/${id}`);

    setfill({
      cardNumber: '',
      cvc: '',
      expiryMonth: '',
      expiryYear: '',
      password: '',
    });
  };
   const isFormValid = Object.values(fill).every((val) => val.trim() !== '');   
  const handleClick = (plan, newPrice) => {
    setPrice(newPrice);
    setActivePlan(plan);
  };

  useEffect(() => {
    const product = movieapi.find((p) => p.id === parseInt(movie));
    setdata(product || null);
  }, [movie]);

  if (!data) {
    return (
      <div className="text-white text-4xl flex items-center justify-center h-screen">
        Data was not found 🚫
      </div>
    );
  }

  if (!data.premium) {
    return (
      <div className="text-white text-4xl flex items-center justify-center h-screen">
        ✅ You already have access to this anime!
      </div>
    );
  }
  return (
     <section className=" h-[60rem] md:h-screen bg-[#0F1014] w-screen absolute top-0 z-[70] ">
          <NavLink to="/anime">
          <div className="absolute text-[5rem] text-white cursor-pointer top-0 md:ml-[3rem] md:mt-[3rem] " ><X/></div>
          </NavLink>
          <div className="flex xl:flex-row flex-col  h-full  " >
          <div className="flex flex-col w-full items-center xl:ml-[4rem] justify-center ">
          <figure className=" h-[5rem] w-[8rem] mt-[2rem] md:mt-0 md:h-[10rem] md:w-[15rem] lg:h-[15rem] lg:w-[15rem] rounded-4xl">
            <img
              src={data?.img}
              className="h-full w-full rounded-4xl object-cover"
              alt="error in showing"
            />
          </figure>
          <h1 className="text-gray-200 exo-2 mt-[1rem] md:mt-0 text-[1rem] md:text-[1.5rem] xl:text-[2rem]">
            Subscribe and enjoy unlimited movies, shows.
          </h1>
        </div>
        <div className="flex flex-col justify-center w-full md:h-[45rem] xl:h-full  text-white p-6">
          <h2 className=" text-[1.2rem] md:text-[1.5rem] xl:text-3xl font-bold text-center mb-6">Choose Your Plan</h2>
          <div className="grid grid-cols-3 gap-[1rem] xl:gap-4 items-start xl:max-w-5xl xl:mx-auto">
            <div className="space-y-6 text-sm text-gray-400 mt-[3.5rem]">
              <div>All content</div>
              <div>Watch on TV or Laptop</div>
              <div>Ads free movies and shows (except sports)</div>
              <div>Number of devices that can be logged in</div>
              <div>Max video quality</div>
              <div>Max audio quality</div>
            </div>
            <div
              className={`${
                color === 'free' ? 'bg-yellow-400' : 'bg-gray-900'
              } p-4 rounded-xl ease-in-out duration-150`}
            >
              <h3
                className={`md:text-xl font-bold mb-4 ${
                  color === 'free' ? 'text-pink-700' : 'text-yellow-400'
                }`}
              >
                Free
              </h3>
              <div
                className={`space-y-6 text-xl font-semibold mb-4 ${
                  color === 'free' ? 'text-gray-900' : 'text-white'
                }`}
              >
                <h2>
                  <X />
                </h2>
                <h2>
                  <X />
                </h2>
                <h2>
                  <X />
                </h2>
                <h2>1</h2>
                <h2>480px</h2>
                <h2>Dolby Atmos</h2>
              </div>
            </div>
  
            <div
              className={`${
                color === 'premium' ? 'bg-yellow-400' : 'bg-gray-900'
              } p-4 rounded-xl ease-in-out duration-150`}
            >
              <h3
                className={` md:text-xl font-bold mb-4 ${
                  color === 'premium' ? 'text-pink-700' : 'text-yellow-400'
                }`}
              >
                Premium
              </h3>
              <div
                className={`space-y-6 text-xl font-semibold mb-4 ${
                  color === 'premium' ? 'text-gray-900' : 'text-white'
                }`}
              >
                <h2>
                  <Check />
                </h2>
                <h2>
                  <Check />
                </h2>
                <h2>
                  <Check />
                </h2>
                <h2>4</h2>
                <h2>4k 2160p</h2>
                <h2>Dolby Atmos</h2>
              </div>
            </div>
          </div>
          <div className="flex gap-[1rem] md:gap-4  justify-center mt-[2rem] mb-[2rem] md:m-[2rem]">
            <button
              onClick={() => handleClick('Quarterly', '499/3month')}
              className=" w-[10rem] h-[3rem] rounded-2xl justify-center md:px-4 md:py-2 bg-gray-800 md:rounded-full text-white flex items-center gap-2"
            >
              Quarterly {activePlan === 'Quarterly' && '✅'}
            </button>
  
            <button
              onClick={() => handleClick('Yearly', '1499/year')}
              className=" w-[10rem] h-[3rem] md:px-4 rounded-2xl md:py-2 bg-gray-800 md:rounded-full text-white flex justify-center items-center gap-2"
            >
              Yearly {activePlan === 'Yearly' && '✅'}
            </button>
  
            <button
              onClick={() => handleClick('Monthly', '299/month')}
              className=" w-[10rem] h-[3rem] md:px-4 md:py-2 rounded-2xl bg-gray-800 md:rounded-full text-white flex justify-center items-center gap-2"
            >
              Monthly {activePlan === 'Monthly' && '✅'}
            </button>
          </div>
  
          <div className="flex justify-center text-gray-100 gap-[2rem]">
              <button
              onClick={() => setcolor('free')}
              className="w-[25rem] rounded-[5px] h-[3rem] md:h-[4rem] xl:h-[5rem] border-[1px] exo-2 text-[1rem] md:text-[1.3rem] border-gray-400 hover:border-white"> Free</button>
              
          <button
              onDoubleClick={()=>setshow(!show)}
              onClick={() => setcolor('premium')}
              className="w-[25rem] rounded-[5px] h-[3rem] md:h-[4rem] xl:h-[5rem] border-[1px] exo-2 text-[1rem] md:text-[1.3rem] border-gray-400 hover:border-white">Premium: ${price}</button>
          </div>
        </div>
          </div>
        {
          show && (
              <div className=' h-full md:h-[35rem] w-full md:w-[50rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#303030] absolute rounded-4xl ' >
                  <div onClick={()=>setshow(!show)} className="text-white text-[4rem] absolute top-[0.5rem] left-[1.5rem] cursor-pointer"><X/></div>
                <div className='flex flex-col md:flex-row mt-[3rem] text-gray-100 ' >
      
                   <form onSubmit={handleSubmit} className=' w-full md:w-[60%] ml-[2rem] h-[35rem] flex- flex-col' >
                  <div className='flex flex-row items-center gap-[1rem] ' >
                    <button className=' exo-2 h-[2rem] w-[2rem] rounded-full bg-gray-500 text-white' >P</button>
                    <h1 className='courgette-regular h-[2rem] w-[7rem] flex items-center '>Pointcard <span className='text-[0.6rem] mt-[-1rem] exo-2' >TM</span> </h1>
                    </div>  
                    <div className=' h-[7rem] w-full mt-[1rem]'>
                      <h1 className='lobster-regular text-[0.8rem]' >
                        Card Number
                      </h1>
                           <h2 className='lobster-regular text-[0.7rem] text-gray-300 ' >
                            Enter the 16-digit card number on the card
                            </h2> 
                       
                       <div className=' mt-[1rem] flex flex-row items-center w-[18rem] md:w-full ease-in-out duration-150 hover:bg-[#2F2933] hover:border-[#8f879d]  h-[3rem] border-[1px] border-gray-400  bg-[#333333] rounded-[10px] '>
                          <span className=' ml-[1rem] text-[1.4rem] rounded-[2px] ' ><FaCcMastercard /></span>
                          <input  value={fill.cardNumber} onChange={(e)=>setfill({...fill, cardNumber:e.target.value})} className=' h-full w-[10rem] md:w-[28rem] border-0 focus:outline-0 ml-[0.5rem] placeholder:text-gray-300 ' type="text"  placeholder=' card number '  />
                           <span className='text-[1.4rem] rounded-[2px]'  >
                            < TbHexagonLetterPFilled />
                           </span>
                           <span className=' text-[1.4rem] rounded-[2px] ml-[0.5rem] '  ><VscPassFilled /></span>
  
                       </div>
                    </div>
                    <div className=' h-[5rem] md:h-[3rem]  w-full   ' >
                      <div className='flex md:items-center flex-col items-start md:flex-row justify-between ' >
                        <div>
                        <h1 className='text-[0.8rem]' >CVC Number</h1>
                        <h2 className='text-[0.6rem] text-gray-400 ' >Enter the 3 or 4 digit number on the card </h2>
                        </div>
                        <div className='flex hover:bg-[#2F2933] hover:border-[#8f879d] mt-1 md:mt-0 rounded-[10px] ease-in-out duration-150 items-center justify-center h-[2.5rem]  md:h-[3rem] w-[18rem] md:w-[20rem]  border-[1px] border-gray-400  ' >
                            <input  value={fill.cvc}  onChange={(e)=>setfill({...fill, cvc:e.target.value})} className=' h-[2rem] ml-[2rem] placeholder:text-gray-300 w-[13rem] text-center focus:outline-0 ' type="text" placeholder='327' />
                            <span className=' md:ml-[3rem] text-[1.2rem] md:text-[1.5rem]  ' ><CgMenuGridR /></span>
                        </div>
                      </div>
  
                    </div>
                    <div className=' h-[5rem] md:h-[3rem] w-full mt-[1rem]  ' >
                      <div className='flex md:items-center justify-between md:flex-row flex-col items-start ' >
                        <div>
                        <h1 className='text-[0.8rem]' >Expiry Date</h1>
                        <h2 className='text-[0.6rem] text-gray-400 ' >Enter the expiry day of the card </h2>
                        </div>
                        <div className='flex items-center gap-[1rem] mt-1 md:mt-0 justify-center   h-[2rem] md:h-[3rem] w-[16.5rem] md:w-[20rem]  ' >
                            <input  value={fill.expiryMonth} onChange={(e)=>setfill({...fill, expiryMonth:e.target.value})}  className='h-[2rem] md:h-[3rem] rounded-[10px] border-[1px] ease-in-out duration-150 border-gray-400 w-[7rem] hover:bg-[#2F2933] hover:border-[#8f879d] placeholder:text-gray-300 text-center focus:outline-0 ' type="text" placeholder='327' />
                            <span>/</span>
                            <input  value={fill.expiryYear}  onChange={(e)=>setfill({...fill, expiryYear:e.target.value})}   className='h-[2rem] :h-[3rem] rounded-[10px] border-[1px] ease-in-out duration-150 border-gray-400 w-[7rem] hover:bg-[#2F2933] hover:border-[#8f879d] placeholder:text-gray-300 text-center focus:outline-0 ' type="text" placeholder='327' />
                        </div>
                      </div>
  
                    </div>
                    <div className=' h-[5rem] md:h-[3rem] w-full mt-[1rem]  ' >
                      <div className='flex md:items-center md:flex-row flex-col items-start justify-between ' >
                        <div>
                        <h1 className='text-[0.8rem]' >Password</h1>
                        <h2 className='text-[0.6rem] text-gray-400 ' >Enter your Dynamic password </h2>
                        </div>
                        <div className='flex hover:bg-[#2F2933] mt-1 md:mt-0 hover:border-[#8f879d] rounded-[10px] ease-in-out duration-150 items-center justify-center h-[2.5rem]  md:h-[3rem] w-[18rem] md:w-[20rem]  border-[1px] border-gray-400  ' >
                            <input  value={fill.password}  onChange={(e)=>setfill({...fill, password:e.target.value})}  className=' h-[2rem] ml-[2rem] placeholder:text-gray-300 w-[13rem] text-center focus:outline-0 ' type="password" placeholder='327' />
                            <span className=' md:ml-[3rem] text-[1.2rem] md:text-[1.5rem]  ' ><CgMenuGridR /></span>
                        </div>
                      </div>
  
                    </div>
                    <div className=' md:hidden h-[5rem] md:h-[3rem] w-full mt-[1rem]  ' >
                      <div className='flex md:items-center md:flex-row flex-col items-start justify-between ' >
                        <div>
                        <h1 className='text-[0.8rem]' >You have to pay </h1>
                        </div>
                        <div className='flex hover:bg-[#2F2933] mt-1 md:mt-0 hover:border-[#8f879d] rounded-[10px] ease-in-out duration-150 items-center justify-center h-[2.5rem]  md:h-[3rem] w-[18rem] md:w-[20rem]  border-[1px] border-gray-400  ' >
                        <h2 className='text-[1rem]'> <span className="text-green-300" >$ </span>{price}</h2>   
                            <span className=' ml-[3rem] text-[1.2rem] md:text-[1.5rem]  ' ><CgMenuGridR /></span>
                        </div>
                      </div>
  
                    </div>
                
                   <button type="submit"  onClick={()=>setformfill(true)}  disabled={!isFormValid}  className={` w-[18rem] md:w-full h-[3rem] text-center mt-[2rem] text-white px-4 py-2 rounded 
      bg-gradient-to-r from-pink-500 to-purple-400 hover:opacity-100
      ${!isFormValid ? 'opacity-90 cursor-not-allowed' : ''}`} >
                        Pay Now
                   </button>
                  
                    </form> 
                    <div className=' hidden  md:flex flex-col justify-center items-center relative w-[30rem] h-[27rem]' >
                    <button className='absolute h-[0.4rem] top-0 z-10 w-[3rem] rounded bg-[#def06a]' ></button>
                       <div className='h-full flex justify-center  w-[18rem] ' >
                        <div className='w-[12rem] relative flex flex-col rounded-[15px] h-[15rem] border-[1px] border-[#414141] bg-[#5c5a5a] ' >
                               <div className='w-full flex justify-between h-[3rem] ' >
                                <span className='text-[2rem] mt-[0.5rem] ml-[0.5rem] ' > <IoIdCard /> </span>
                                <span className='text-[2rem] mt-[0.5rem] mr-[0.5rem] ' > < RiMastercardLine /> </span>
                               </div>
                               <div className="w-full text-center flex items-center justify-center flex-col h-[4rem] text-[0.9rem] " >
                                <h1 className='text-[1rem]' >Card  </h1>
                                <h2 className='flex items-center justify-center' >*****  <span className="mt-[-0.3rem] ml-[0.5rem] " >324</span> </h2>
  
                               </div>
                               <div className="absolute text-black bottom-0 flex items-center justify-center gap-[2rem] w-full bg-[#E1F701] h-[5rem] rounded-b-2xl " >
                                       <h1 className='text-black orbitron text-[1.4rem] ' >Point</h1>
                                       <span className='text-[1.2rem]' ><IoIosWifi /></span>
                                       </div>
                        </div>
  
                       </div>
                       <div className='h-[10rem] text-center liter-regular flex items-center flex-col justify-center w-[15rem] rounded-4xl border-[1px] border-gray-400 ' >
  
                            <h1 className='text-[1.5rem]' >You have to pay</h1>
                            <h2 className='text-[1.2rem]'> <span className="text-green-300" >$ </span>{price}</h2>   
                       </div>
                    </div>
                </div>
              </div>
          )
        }
        {fromfill && (
         <div className='absolute h-[20rem] flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center w-[25rem] bg-white rounded-xl shadow-xl z-50 p-4 gap-3' >
         <img src={tick} className='h-[8rem]' alt="success" />        
     
         <h2 className='text-2xl font-semibold text-green-600'>Payment Successful</h2>
         <p className='text-center text-gray-700'>Your subscription has been activated. Enjoy watching premium anime!</p>
         
         <NavLink to="/anime" >
         <button 
           className='mt-4 bg-red-600 hover:bg-green-800 ease-in-out duration-150 text-gray-50 w-[10rem] h-[2rem] rounded-lg'>
           Close
         </button>
         </NavLink>
       </div>
        )}
      </section>
  );
}

export default Subscrips;
