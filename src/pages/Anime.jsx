
import React, { useRef, useState } from 'react'
import solo from "../assets/movie1.mp4"
import goku from "../assets/video.mp4"
import luffy from "../assets/luffy.jpg"
import naruto from "../assets/naruto.jpg"
import icon from "../assets/about/icon.jpg"
import icon2 from "../assets/about/icon2.jpg"
import icon3 from "../assets/about/icon3.jpg"
import icon4 from "../assets/about/icon4.jpg"
import icon5 from "../assets/about/icon5.jpg"
import icon6 from "../assets/about/icon6.jpg"
import icon7 from "../assets/about/icon7.jpg"
import icon8 from "../assets/about/icon8.jpg"
import icon9 from "../assets/about/icon9.jpg"
import icon10 from "../assets/about/icon10.jpg"
import icon11 from "../assets/about/icon11.jpg"
import icon12 from "../assets/about/icon12.jpg"
import movieimg from "../assets/movieimg.png"
import movieimgs from "../assets/movieimgs.jpg"
import movieimgs2 from "../assets/movieimgs2.jpg"
import movieimgs3 from "../assets/movieimg3.jpg"
import movieimgs4 from "../assets/movieimgs4.jpg"
import voice from "../assets/audio/voice.mp3"
import voice2 from "../assets/audio/voice2.mp3"
import voice3 from "../assets/audio/voice3.mp3"
import voice4 from "../assets/audio/voice4.mp3"
import voice5 from "../assets/audio/voice5.mp3"
import voice6 from "../assets/audio/voice6.mp3"
import voice7 from "../assets/audio/voice7.mp3"
import voice8 from "../assets/audio/voice8.mp3"
import voice9 from "../assets/audio/voice9.mp3"
import voice10 from "../assets/audio/voice10.mp3"
import voice11 from "../assets/audio/voice11.mp3"
import voice12 from "../assets/audio/voice12.mp3"
import voice13 from "../assets/audio/voice13.mp3"
import dom from "../assets/dom.jpg"
import dark from "../assets/dark.jpg"
import attack from "../assets/attack.jpg"
import bluelock from "../assets/bluelock.jpg"
import { FaPlay } from "react-icons/fa6";
import mo from "../assets/movie/mo.jpg"
import mo2 from "../assets/movie/mo2.jpg"
import mo3 from "../assets/movie/mo3.jpg"
import mo4 from "../assets/movie/mo4.jpg"
import mo5 from "../assets/movie/mo5.jpg"
import mo6 from "../assets/movie/mo6.jpg"
import mo7 from "../assets/movie/mo7.jpg"
import mo8 from "../assets/movie/mo8.jpg"
import mo9 from "../assets/movie/mo9.jpg"
import mo10 from "../assets/movie/mo10.jpg"
import mo11 from "../assets/movie/mo11.jpg"
import mo12 from "../assets/movie/mo12.jpg"
import mo13 from "../assets/movie/mo13.jpg"
import mo14 from "../assets/movie/mo14.jpg"
import mo15 from "../assets/movie/mo15.jpg"
import mo16 from "../assets/movie/mo16.jpg"
import mo17 from "../assets/movie/mo17.jpg"
import mo18 from "../assets/movie/mo18.jpg"
import mo19 from "../assets/movie/mo19.jpg"
import mo20 from "../assets/movie/mo20.jpg"
import moy from "../assets/moy.jpg"
import { NavLink } from "react-router"
import animeapi from "../../api/anime.json"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger);
function Anime() {
  const [currentAudio, setCurrentAudio] = useState(null);
   const triggers = useRef(null)
   const tag = useRef(null)
  const gokuref = useRef(null)
  const gokutag = useRef(null)
  const tag2 = useRef(null)
  const animation = useRef(null)
  const anay = useRef(null)
  const anay2 = useRef(null)
  const customImages = [mo, mo2, mo3, mo4, mo5, mo6];
const filteredAnime = animeapi.filter((item) => item.id >= 6 && item.id <= 11);
const customimg = [mo7 , mo8, mo9 , mo10 ,mo11 , mo12]
const filteranime = animeapi.filter((items)=>items.id >=12 && items.id <= 17)
const customimges = [mo13 , mo14 , mo15 , mo16 , mo17 , mo18 , mo19 ,mo20]
const filtercustom = animeapi.filter((items)=> items.id >=18 && items.id <= 25 )

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
    gsap.to(gokuref.current, {
      scrollTrigger: {
        trigger: triggers.current,
        start: "top top",
        end: "bottom center",
        pin: true,
        scrub: 2,
      },
      scale: 1.7,
    });
    gsap.to(tag.current,{
      scrollTrigger:{
        trigger: triggers.current ,
        start:"center 40%",
        end:"bottom center",
        pin:true,
        scrub:1
      },
     transform:"translateY(-90%)",
     skewY:20,
    });
    gsap.to(tag2.current,{
      scrollTrigger:{
        trigger:triggers.current,
        start:"20% top",
        endtrigger:tag.current,
        end:"90% top",
        scrub:1,
        pin:true
      },
      transform:"translateY(-200%)",
      skewY:-20,

    });
    gsap.to(anay.current ,{
     scrollTrigger:{
     trigger:animation.current,
     start:" top center ",
     scrub:true,
     end:"bottom center"
    },
    skewX:20
    });
        gsap.to(anay2.current ,{
     scrollTrigger:{
     trigger:animation.current,
     start:" top center ",
     scrub:true,
     end:"bottom center"
    },
    skewX:20
    })
  });
  //   gsap.to(gokuref.current, {
  //     scrollTrigger: {
  //       trigger: triggers.current,
  //       start: "top 20%", // Adjusted for mobile viewport
  //       end: "bottom 80%",
  //       pin: false, // Disable pinning for mobile
  //       scrub: 2,
  //     },
  //     scale: 1.2, // Reduced scale for mobile
  //   });

  //   gsap.to(tag.current, {
  //     scrollTrigger: {
  //       trigger: triggers.current,
  //       start: "center 60%",
  //       end: "bottom 90%",
  //       pin: false,
  //       scrub: 1,
  //     },
  //     transform: "translateY(-50%)", // Less translation
  //     skewY: 10, // Reduced skew
  //   });

  //   gsap.to(tag2.current, {
  //     scrollTrigger: {
  //       trigger: triggers.current,
  //       start: "40% top",
  //       endTrigger: tag.current,
  //       end: "70% top",
  //       scrub: 1,
  //       pin: false,
  //     },
  //     transform: "translateY(-100%)", // Less translation
  //     skewY: -10, // Reduced skew
  //   });

  //   gsap.to(anay.current, {
  //     scrollTrigger: {
  //       trigger: animation.current,
  //       start: "top 70%",
  //       end: "bottom 90%",
  //       scrub: true,
  //     },
  //     skewX: 10, // Reduced skew
  //   });

  //   gsap.to(anay2.current, {
  //     scrollTrigger: {
  //       trigger: animation.current,
  //       start: "top 70%",
  //       end: "bottom 90%",
  //       scrub: true,
  //     },
  //     skewX: 10, // Reduced skew
  //   });
  // });
  }, []);
  const playSound = (sound) => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const audio = new Audio(sound);
    setCurrentAudio(audio);
    audio.play();
  };
  
  const stopSound = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }
  };

  return (
    <>
    <div className="h-auto w-screen bg-black " >
    <div className=" h-[15rem] sm:h-[25rem] md:h-[30rem] w-screen  flex items-center justify-center relative md:justify-around " >
                  <div className=" hidden  md:flex flex-col items-center justify-center sm:h-[25rem]  md:h-[30rem] sm:w-[20rem] md:w-[30rem] " >
                    <h1 className=" hidden sm:block md:text-[2rem] lg:text-[3rem] orbitron font-bold bg-gradient-to-r from-orange-500 via-pink-400 to-red-600 bg-clip-text text-transparent " >"Dragon Ball Z"</h1>
                    <p className="text-center  hidden md:block md:text-[0.8rem] lg:text-[1rem] bebas-neue text-gray-300" >Dragon Ball Z follows the legendary Saiyan warrior Goku as he protects Earth from powerful foes—aliens, androids, and gods alike. Alongside his friends and rivals..</p>
                    <NavLink to={`/anime/${animeapi[0].id}`} >
                    <button className=" hidden   sm:w-[10rem] md:w-[12rem] lg:w-[15rem] mt-[1rem] text-[1rem] md:text-[1.2rem] font-bold h-[2rem] md:h-[3rem] bg-yellow-400 exo border-0 text-black hover:text-white rounded-[10px] md:flex  items-center justify-center gap-[1rem]  hover:bg-red-600 ease-in-out duration-100 " >Watch now <FaPlay className="h-[0.8rem]" /> </button>
                    </NavLink>
                 
                  </div>
                    <figure className="h-[30rem] w-full md:w-[40rem]  rounded-4xl  " >
                    <video  className="h-full w-full absolute top-0  md:relative md:h-[30rem] rounded-4xl " autoPlay loop muted >
        <source src={goku} type="video/mp4" className="rounded-4xl"  ></source> 
      </video>
                    </figure>
            </div>
   <div className=" text-white  " > 
       <h1 className=" text-[1.5rem] sm:text-[2rem] m-2 orbitron flex items-center  " >
        <span className="text-red-400" >P</span>opular Anime
       </h1>
       <div id="scroller" className="flex  justify-around overflow-x-scroll " >
        <NavLink to={`/anime/${animeapi[1].id}`} >
        <figure className=" h-[10rem] w-[8rem] sm:h-[15rem] sm:w-[10rem] md:h-[20rem] md:w-[15rem] xl:h-[25rem] xl:w-[18rem] flex items-center justify-center  text-green-400 hover:text-white  hover:scale-[1.1] ease-in-out duration-75  " >
          <figcaption className=' text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold z-10 ' >1</figcaption>
          <img src={movieimgs} className=" h-full w-full md:h-[18rem] md:w-[12rem] xl:h-[22rem] xl:w-[15rem] md:shadow-[0px_0px_30px_blue] rounded-4xl " alt="error in showing img" />
        </figure>
        </NavLink>
        <NavLink to={`/anime/${animeapi[2].id}`} >
        <figure className="h-[10rem] w-[8rem]  sm:h-[15rem] sm:w-[10rem] md:h-[20rem] md:w-[15rem] xl:h-[25rem] xl:w-[18rem] flex items-center justify-center text-green-400 hover:text-white  hover:scale-[1.1] ease-in-out duration-75 " >
          <figcaption className=" text-[2rem]  sm:text-[3rem] md:text-[4rem] font-bold z-10 " >2</figcaption>
          <img src={movieimgs2} className="h-full w-full md:h-[18rem] md:w-[12rem] xl:h-[22rem] xl:w-[15rem] md:shadow-[0px_0px_30px_blue] rounded-4xl hover:scale-[1.1]  ease-in-out duration-75 " alt="error in showing img" />
        </figure>
        </NavLink>
        <NavLink to={`/anime/${animeapi[3].id}`} >
        <figure className="h-[10rem] w-[8rem]  sm:h-[15rem] sm:w-[10rem] md:h-[20rem] md:w-[15rem] xl:h-[25rem] xl:w-[18rem] flex items-center justify-center text-green-400 hover:text-white  hover:scale-[1.1] ease-in-out duration-75 " >
          <figcaption className=' text-[2rem]  sm:text-[3rem] md:text-[4rem] font-bold z-10 ' >3</figcaption>
          <img src={movieimgs3} className=" h-full w-full md:h-[18rem] md:w-[12rem] xl:h-[22rem] xl:w-[15rem] md:shadow-[0px_0px_30px_blue] rounded-4xl hover:scale-[1.1]  ease-in-out duration-75 " alt="error in showing img" />
        </figure>
        </NavLink>
        <NavLink to={`/anime/${animeapi[4].id}`}>
        <figure className=" hidden  h-[20rem] w-[15rem] xl:h-[25rem] xl:w-[18rem] lg:flex items-center justify-center text-green-400 hover:text-white  hover:scale-[1.1] ease-in-out duration-75 " >
          <figcaption className=" text-[2rem] md:text-[4rem] font-bold z-10  " >4</figcaption>
          <img src={movieimgs4} className="h-[18rem] w-[12rem] xl:h-[22rem] xl:w-[15rem] shadow-[0px_0px_30px_blue] rounded-4xl hover:scale-[1.1]  ease-in-out duration-75 " alt="error in showing img" />
        </figure>
        </NavLink>
       </div>
   </div> 
  <div ref={triggers} className=" hidden h-auto w-screen mt-[1rem] 
   md:flex flex-col items-center justify-center " >
      <div ref={gokutag} className=" md:h-[50rem] rounded-4xl w-[93rem] overflow-hidden flex items-center justify-center relative " >  
      <video ref={gokuref} className="h-[30rem] rounded-4xl " autoPlay loop muted >
        <source className='rounded-4xl' src={solo} type="video/mp4" ></source> 
      </video>
      </div>
      
  </div> 
  <div ref={tag} className="md:bg-gray-900 text-white rounded-4xl mt-[1rem] md:mt-0 h-[30rem]  sm:h-[40rem] md:h-[60rem] w-screen z-0   " >
    <h1 className=" text-[1.5rem] md:text-[4rem] liter-regular ml-[1rem] " > <span className="text-green-600" >P</span>opular in <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent" >India</span> -- </h1>
    <h2 className=" text-[0.8rem] md:text-[1.2rem] md:mt-[-1.1rem] ml-[1.5rem] courgette-regular " >Check out some of the hottest shows</h2>
    <div className=" md:h-[45rem] grid grid-cols-3 place-items-center gap-[1rem] items-center justify-center">
    {filteredAnime.map((anime, index) => (
    <NavLink to={`/anime/${anime.id}`} key={anime.id}>
      <figure className=" h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[10rem] md:h-[22rem] md:w-[16rem] md:bg-red-600 mt-[1rem] rounded-2xl hover:scale-[1.05] ease-in-out duration-200">
        <img
          src={customImages[index]}
          alt={anime.title}
          className="object-contain cursor-pointer w-full h-full hover:scale-[1.1] ease-in-out duration-100 rounded-4xl drop-shadow-[0px_0px_10px_gold]"
        />
      </figure>
    </NavLink>
  ))}
</div>
</div>
<div ref={tag2} className=" md:bg-gradient-to-r from-black via-gray-900 rounded-4xl to-purple-900  text-white h-[30rem] sm:h-[40rem] md:h-[60rem] w-screen z-0 " >
    <h1 className=" text-[1.5rem] sm:text-[2rem] md:text-[3rem] dancing-script  ml-[1rem] " > <span className="text-red-600" >H</span>idden Gems </h1>
    <h2 className="  text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] md:mt-[-1.1rem] ml-[1.5rem] courgette-regular " >The handpicked collection of fascinating titles for the mega fans!</h2>
   <div className=" md:h-[45rem] grid grid-cols-3 place-items-center gap-[1rem] items-center justify-center ">
   { filteranime.map((items , index) => (
              <NavLink to={`/anime/${items.id}`} >
                     <figure key={index} className=" h-[10rem] sm:h-[15rem] sm:w-[10rem] w-[10rem] md:h-[22rem] md:w-[16rem] md:bg-red-400 mt-[1rem] rounded-2xl " >
                  <img className="object-contain cursor-pointer w-full h-full hover:scale-[1.1] ease-in-out duration-100 rounded-4xl drop-shadow-[0px_0px_10px_blue]  " key={index} src={customimg[index]} alt="error in showing the img" />
                  </figure>
                </NavLink>
                ) ) }
   </div>
</div>

  <div ref={animation} className="h-auto w-screen flex   flex-col bg-black  overflow-hidden md:mt-[-44rem] lg:mt-[-50rem] xl:mt-[-38rem] ">
    
    <h1 className="ml-[1rem] text-[2rem] sm:text-[3rem] md:text-[5rem] trade-winds-regular text-white" >THE STUDIO</h1>
    <div className=" h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[40rem]  relative w-screen flex items-center justify-around  " >

      <div  className="flex" >
            <figure ref={anay} className=" h-[10rem] w-[8rem] sm:h-[15rem] sm:w-[10rem] md:h-[20rem] lg:h-[30rem] rounded-4xl absolute left-0 top-[9rem] z-20 md:w-[20rem] bg-green-700 " >
                <img src={naruto} className="w-full h-full rounded-4xl object-cover" alt="error in showing img"/>
            </figure>
            <figure ref={anay2} className=" h-[10rem] w-[8rem] sm:h-[15rem] sm:w-[10rem] md:h-[20rem] lg:h-[30rem] absolute top-0  right-[2rem] sm:left-[8rem] md:left-[15rem] rounded-4xl md:w-[20rem] bg-green-700 " >
                <img src={luffy} className="w-full h-full object-cover rounded-4xl " alt="error in showing img"/>
            </figure>
      </div>
       <div>
       <p className=" absolute bottom-[3rem] right-[1.5rem] xl:relative lg:text-lg text-white w-[12rem] sm:w-[20rem] md:w-auto text-[0.5rem] sm:text-[0.7rem] lg:text-[1rem] ml-[2rem] text-center md:max-w-2xl md:mx-auto md:ml-[20rem] mt-[5rem] md:mt-[20rem] lg:mt-4">
  Welcome to <span className="text-red-500 text-[0.5rem] md:text-[0.7rem] lg:text-[1rem] font-semibold">The Studio</span>, where anime comes to life! Dive into a world of vibrant animation, captivating stories, and unforgettable characters. Whether you're a longtime fan or just starting your journey, there's something here for everyone!
</p>              
       </div>
    </div>        
    <div className=" h-[19rem] md:h-[35rem] w-screen  text-center " >
       <h1 className=" text-[2rem] md:text-[4rem] font-bold text-center bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text " >"Your Anime, Anytime, Anywhere!"</h1>
          <div className="flex items-center justify-center gap-[2rem] w-full mt-[2rem] md:mt-0 md:h-[30rem]" >
           <figure className=" h-[10rem] w-[10rem] md:h-[21rem] xl:h-[25rem] mt-[-3rem] md:w-[15rem] rounded-2xl bg-red-500 hover:scale-[1.1] ease-in-out duration-150 hover:shadow-[0px_0px_30px_red] ">
            <img src={dom} alt="Anime Scene" className="w-full h-[10rem] md:h-[18rem]  object-cover rounded-lg shadow-lg" />
           <figcaption className=" hidden md:block mt-2 text-lg text-white lobster-regular ">
           Dandadan
          </figcaption>
           </figure>
           <figure className=" h-[10rem] w-[10rem] md:h-[21rem] lg:h-[22rem] xl:h-[25rem] md:w-[15rem] rounded-2xl bg-green-500 hover:scale-[1.1] ease-in-out duration-150  hover:shadow-[0px_0px_30px_green] ">
            <img src={attack} alt="Anime Scene" className="w-full h-[10rem] md:h-[18rem] object-cover rounded-lg shadow-lg  " />
           <figcaption className=" hidden md:block mt-2 text-lg text-white lobster-regular ">
           Attack on Titan
          </figcaption>
           </figure>
           <figure className=" h-[10rem]  w-[10rem] md:h-[21rem] lg:h-[22rem] xl:h-[25rem] mt-[-3rem] md:w-[15rem] rounded-2xl bg-red-500 hover:scale-[1.1] ease-in-out duration-150  hover:shadow-[0px_0px_30px_red] ">
            <img src={dark} alt="Anime Scene" className="w-full h-[10rem] md:h-[18rem]  object-center rounded-lg shadow-lg trade-winds-regular " />
           <figcaption className=" hidden md:block mt-2 text-lg text-white lobster-regular ">
           Death Note
          </figcaption>
           </figure>
          </div>
    </div>
     <div className=" hidden md:block h-auto w-screen text-white mt-[2rem]   " >
     <h1 className="text-[3rem] font-extrabold orbitron text-white drop-shadow-md">
  <span className="text-red-500 drop-shadow-[2px_2px_0px_rgba(255,0,0,0.6)]">P</span>opular Character
</h1>
      <div className="grid grid-cols-1 md:h-[18rem] lg:h-[25rem] place-items-center md:gap-y-[-2rem] lg:gap-y-[2rem] " >

        <div className="flex gap-[5rem] ml-[10rem] text-black ">
        <button onMouseEnter={()=>playSound(voice)} onMouseLeave={stopSound} className="md:hidden h-[4rem] bg-white drop-shadow-[0px_0px_10px_red] lg:flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Alisa</h2>
        </button>
        <button onMouseEnter={()=>playSound(voice4)} onMouseLeave={stopSound} className="h-[4rem] bg-white drop-shadow-[0px_0px_10px_blue] flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon2} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Isagi</h2>
        </button> 
        <button onMouseEnter={()=>playSound(voice7)} onMouseLeave={stopSound} className="h-[4rem] bg-white drop-shadow-[0px_0px_10px_red] flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon3} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Luffy</h2>
        </button>
        <button onMouseEnter={()=>playSound(voice12)} onMouseLeave={stopSound} className=" md:hidden  h-[4rem] bg-white drop-shadow-[0px_0px_10px_green] xl:flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon10} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Izuku</h2>
        </button>
        </div>
      <div className="flex gap-[5rem] mr-[15rem] text-black " >
      <button onMouseEnter={()=>playSound(voice13)} onMouseLeave={stopSound} className="md:hidden  h-[4rem] bg-white drop-shadow-[0px_0px_10px_gold] lg:flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-[-25px] transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon4} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Nezuko</h2>
        </button>
     
        <button onMouseEnter={()=>playSound(voice11)} onMouseLeave={stopSound} className="h-[4rem] bg-white drop-shadow-[0px_0px_10px_purple] flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-[-25px] transition-transform duration-300  " >
             <img className="h-[4rem] rounded-3xl" src={icon5} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Asta</h2>
        </button>
     
        <button onMouseEnter={()=>playSound(voice6)} onMouseLeave={stopSound} className="h-[4rem] bg-white drop-shadow-[0px_0px_10px_pink] flex items-center gap-[1rem] rounded-4xl w-[12rem]  hover:-translate-x-[-25px] transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon6} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Anny Forger</h2>
        </button>
        <button onMouseEnter={()=>playSound(voice8)} onMouseLeave={stopSound} className=" md:hidden  h-[4rem] bg-white drop-shadow-[0px_0px_10px_orange] xl:flex items-center gap-[1rem] rounded-4xl w-[12rem]  hover:-translate-x-[-25px] transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl  " src={icon12} alt="error in showing img" />
             <h2 className="courgette-regular-2 " >Dasenhando</h2>
        </button>
      </div> 
      <div className="flex gap-[5rem]  ml-[15rem] text-black " >
      <button onMouseEnter={()=>playSound(voice10)} onMouseLeave={stopSound} className=" md:hidden h-[4rem] bg-white drop-shadow-[0px_0px_10px_gold] lg:flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300  " >
             <img className="h-[4rem] rounded-3xl  " src={icon7} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Zenitsu</h2>
        </button>
     
        <button onMouseEnter={()=>playSound(voice2)} onMouseLeave={stopSound} className="h-[4rem] bg-white drop-shadow-[0px_0px_10px_green] flex items-center gap-[1rem] rounded-4xl w-[12rem]  hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl " src={icon8} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Haruka Sakura</h2>
        </button>
     
        <button onMouseEnter={()=>playSound(voice5)} onMouseLeave={stopSound} className="h-[4rem] bg-white drop-shadow-[0px_0px_10px_red] flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl " src={icon9} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Yuji</h2>
        </button>
        <button onMouseEnter={()=>playSound(voice9)} onMouseLeave={stopSound} className=" md:hidden h-[4rem] bg-white drop-shadow-[0px_0px_10px_yellow] xl:flex items-center gap-[1rem] rounded-4xl w-[12rem] hover:-translate-x-10 transition-transform duration-300 " >
             <img className="h-[4rem] rounded-3xl " src={icon11} alt="error in showing img" />
             <h2 className=" courgette-regular-2 " >Naruto</h2>
        </button>
      </div>
      </div>
     </div>
     <div className=' w-screen flex flex-cols  justify-center mt-[2rem] ' >
    <figure className="w-[90rem] h-[5rem] md:h-[10rem] bg-red-400 " >
    <img className="w-full h-full object-cover " src={moy} alt="error in showing img" />
    </figure>
    </div>
    <h1 className=" text-[1.5rem] mt-[1rem] md:mt-0 md:text-[4rem] font-bold text-center bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text " >"Anime Lives Here. Legends Begin Here."</h1>
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 place-items-center mt-[1rem] md:mt-[5rem] gap-y-[1.5rem] md:gap-y-[5rem]  ">
      {filtercustom.map((anime , index)=>(
        <NavLink to={`/anime/${anime.id}`} key={anime.id} >
        <figure  className="  h-[10rem] w-[8rem] md:h-[15rem] md:w-[10rem] lg:h-[20rem] lg:w-[15rem] bg-red-500 shadow-[0px_0px_10px_red] md:shadow-[0px_0px_30px_red]  cursor-pointer rounded-4xl " >
          <img className="w-full h-full object-cover shadow-[0px_0px_10px_blue]  md:shadow-[0px_0px_20px_blue] hover:scale-[1.1] ease-in-out duration-150 md:rounded-4xl  " src={customimges[index]} alt="error in showing img" />
        </figure>
        </NavLink>
      ) ) }
     </div>
   </div>
   </div>
   </>
   
  )
}
export default Anime