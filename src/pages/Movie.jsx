import jocker from "../assets/img/jocker.jpg"
import { FaPlay } from "react-icons/fa6";
import { RiMovieAiFill } from "react-icons/ri";
import award from "../assets/img/award.jpg"
import award2 from "../assets/img/award2.jpg"
import award3 from "../assets/img/award3.jpg"
import award4 from "../assets/img/award4.jpg"
import award5 from "../assets/img/award5.jpg"
import { BiSolidAward } from "react-icons/bi";
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"
import img4 from "../assets/img/img4.jpg"
import img6 from "../assets/img/img6.jpg"
import img7 from "../assets/img/img7.jpg"
import oskar from "../assets/img/oskar.jpg"
import img8 from "../assets/img/img8.jpg"
import img9 from "../assets/img/img9.jpg"
import img10 from "../assets/img/img10.jpg"
import img11 from "../assets/img/img11.jpg"
import img12 from "../assets/img/img12.jpg"
import popular1 from "../assets/img/popular1.jpg"
import popular2 from "../assets/img/popular2.jpg"
import popular3 from "../assets/img/popular3.jpg"
import popular4 from "../assets/img/popular4.jpg"
import popular5 from "../assets/img/popular5.jpg"
import popular6 from "../assets/img/popular6.jpg"
import popular7 from "../assets/img/popular7.jpg"
import popular8 from "../assets/img/popular8.jpg"
import popular9 from "../assets/img/popular9.jpg"
import popular10 from "../assets/img/popular10.jpg"
import horror from "../assets/img/horror.jpg"
import horror2 from "../assets/img/horror2.jpg"
import horror3 from "../assets/img/horror3.jpg"
import horror4 from "../assets/img/horror4.jpg"
import horror5 from "../assets/img/horror5.jpg"
import horror6 from "../assets/img/horror6.jpg"
import horror7 from "../assets/img/horror7.jpg"
import horror8 from "../assets/img/horror8.jpg"
import horror9 from "../assets/img/horror9.jpg"
import horror10 from "../assets/img/horror10.jpg"
import ana from "../assets/img/ana.jpg"
import ana2 from "../assets/img/ana2.jpg"
import ana3 from "../assets/img/ana3.jpg"
import ana4 from "../assets/img/ana4.jpg"
import ana5 from "../assets/img/ana5.jpg"
import ana6 from "../assets/img/ana6.jpg"
import ana7 from "../assets/img/ana7.jpg"
import ana8 from "../assets/img/ana8.jpg"
import ana9 from "../assets/img/ana9.jpg"
import ana10 from "../assets/img/ana10.jpg"
import { BiSolidMoviePlay } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import { BiSolidCameraMovie } from "react-icons/bi";
import love from "../assets/img/love.jpg"
import love2 from "../assets/img/love2.jpg"
import love3 from "../assets/img/love3.jpg"
import love4 from "../assets/img/love4.jpg"
import love5 from "../assets/img/love5.jpg"
import love6 from "../assets/img/love6.jpg"
import movieapi from "../../api/movie.json"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdMovie } from "react-icons/md";
import { MdMovieFilter } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink } from "react-router";
gsap.registerPlugin(ScrollTrigger);

function Movie(){
    const sectionRef = useRef()
    const imagesRef = useRef([])
    const sectionRef2 = useRef()
    const scrollerRef = useRef(null);
    const imgRefs = useRef([]);
    const triggerpoint = useRef()
    const list  = useRef()
    const list2 = useRef()
    const list3 = useRef()
    const list4 = useRef()
    const list5 = useRef()
    const list6 = useRef()
    const textRef = useRef(null)
      const customImages = [img1, img11, img10, img8, img12, img6 , img9 ,img4 , img3 ,img2 ];
    const filteredmovie = movieapi.filter((item) => item.id >= 2 && item.id <= 11);
    const customImg = [popular1 , popular2 ,popular3 , popular4 , popular5 , popular6 , popular7 , popular8 , popular10];
    const filteredmovies = movieapi.filter((item) => item.id >= 12 && item.id <= 20);
    const custom = [horror10 , horror2 ,horror3 , horror4 , horror5 , horror6 , horror7 , horror8 , horror9 , horror];
    const filtered = movieapi.filter((item) => item.id >= 21 && item.id <= 30);



    const images = [
        { src: ana, alt: "error in showing the img" },
        { src: ana2, alt: "error in showing the img" },
        { src: ana3, alt: "error in showing the img" },
        { src: ana4, alt: "error in showing the img" },
        { src: ana5, alt: "error in showing the img" },
        { src: ana6, alt: "error in showing the img" },
        { src: ana7, alt: "error in showing the img" },
        { src: ana8, alt: "error in showing the img" },
        { src: ana9, alt: "error in showing the img" },
        { src: ana10, alt: "error in showing the img" },
        { src: ana, alt: "error in showing the img" },
        { src: ana2, alt: "error in showing the img" },
        { src: ana3, alt: "error in showing the img" },
        { src: ana4, alt: "error in showing the img" },
        { src: ana5, alt: "error in showing the img" },
        { src: ana6, alt: "error in showing the img" },
        { src: ana7, alt: "error in showing the img" },
        { src: ana8, alt: "error in showing the img" },
        { src: ana9, alt: "error in showing the img" },
        { src: ana10, alt: "error in showing the img" },
        { src: ana, alt: "error in showing the img" },
        { src: ana2, alt: "error in showing the img" },
        { src: ana3, alt: "error in showing the img" },
        { src: ana4, alt: "error in showing the img" },
        { src: ana5, alt: "error in showing the img" },
        { src: ana6, alt: "error in showing the img" },
        { src: ana7, alt: "error in showing the img" },
        { src: ana8, alt: "error in showing the img" },
        { src: ana9, alt: "error in showing the img" },
        { src: ana10, alt: "error in showing the img" },
        { src: ana, alt: "error in showing the img" },
        { src: ana2, alt: "error in showing the img" },
        { src: ana3, alt: "error in showing the img" },
        { src: ana4, alt: "error in showing the img" },
        { src: ana5, alt: "error in showing the img" },
        { src: ana6, alt: "error in showing the img" },
        { src: ana7, alt: "error in showing the img" },
        { src: ana8, alt: "error in showing the img" },
        { src: ana9, alt: "error in showing the img" },
        { src: ana10, alt: "error in showing the img" },  
        { src: ana2, alt: "error in showing the img" },
        { src: ana3, alt: "error in showing the img" },
        { src: ana4, alt: "error in showing the img" },
        { src: ana5, alt: "error in showing the img" },
        { src: ana6, alt: "error in showing the img" },
        { src: ana7, alt: "error in showing the img" },
        { src: ana8, alt: "error in showing the img" },
        { src: ana9, alt: "error in showing the img" },
        { src: ana10, alt: "error in showing the img" },
        { src: ana, alt: "error in showing the img" },
      ];
      useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          gsap.fromTo(
            sectionRef2.current,
            { transform: "translateX(100%)" },
            {
              opacity: 1,
              transform: "translateX(0)",
              scrollTrigger: {
                trigger: triggerpoint.current,
                start: "center top",
                end: "80% top",
                scrub: 2,
              },
            }
          );
    
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=3500",
              scrub: true,
              pin: true,
            },
          });
    
          tl.to(list.current, {
            transform: "translateY(-110%)",
            skewY: -5,
            opacity: 1,
            duration: 1,
          })
            .to(list2.current, {
              transform: "translateY(-110%)",
              skewY: -5,
              opacity: 1,
              duration: 1,
            })
            .to(list3.current, {
              transform: "translateY(-110%)",
              skewY: -5,
              opacity: 1,
              duration: 1,
            })
            .to(list4.current, {
              transform: "translateY(-110%)",
              skewY: -5,
              opacity: 1,
              duration: 1,
            })
            .to(list5.current, {
              transform: "translateY(-110%)",
              skewY: -5,
              opacity: 1,
              duration: 1,
            });
        });

        mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
          gsap.fromTo(
            sectionRef2.current,
            { transform: "translateX(100vw)" }, 
            {
              opacity: 1,
              transform: "translateX(0)",
              scrollTrigger: {
                trigger: triggerpoint.current,
                start: "top 20%", 
                end: "80% 20%",
                scrub: 1.5
              },
            }
          );
    
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=2000",
              scrub: true,
              pin: true,
            
            },
          });
    
          tl.to(list.current, {
            transform: "translateY(-100%)", 
            skewY: -3,
            opacity: 1,
            duration: 0.8,
          })
            .to(list2.current, {
              transform: "translateY(-100%)",
              skewY: -3,
              opacity: 1,
              duration: 0.8,
            })
            .to(list3.current, {
              transform: "translateY(-100%)",
              skewY: -3,
              opacity: 1,
              duration: 0.8,
            })
            .to(list4.current, {
              transform: "translateY(-100%)",
              skewY: -3,
              opacity: 1,
              duration: 0.8,
            })
            .to(list5.current, {
              transform: "translateY(-100%)",
              skewY: -3,
              opacity: 1,
              duration: 0.8,
            });
        });
 
        mm.add("(max-width: 767px)", () => {
          gsap.fromTo(
            sectionRef2.current,
            { transform: "translateX(80vw)" }, 
            {
              opacity: 1,
              transform: "translateX(0)",
              scrollTrigger: {
                trigger: triggerpoint.current,
                start: "center 30%", 
                end: "80% 30%",
                scrub: 1,
                
              },
            }
          );
    
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=3500", 
              scrub: true,
              pin: true,
            },
          });
    
          tl.to(list.current, {
            transform: "translateY(-145%)",
            skewY: -15, 
            opacity: 1,
            duration: 0.6,
          })
            .to(list2.current, {
              transform: "translateY(-145%)",
              skewY: -15,
              opacity: 1,
              duration: 0.6,
            })
            .to(list3.current, {
              transform: "translateY(-145%)",
              skewY: -15,
              opacity: 1,
              duration: 0.6,
            })
            .to(list4.current, {
              transform: "translateY(-145%)",
              skewY: -15,
              opacity: 1,
              duration: 0.6,
            })
            .to(list5.current, {
              transform: "translateY(-145%)",
              skewY: -15,
              opacity: 1,
              duration: 0.6,
            });
        });
    
        
        return () => {
          mm.revert(); 
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }, []);
  const loveImages = [love, love2, love3, love4, love5, love6];
  const lovefilter = movieapi.filter((items)=> items.id >= 36 && items.id <= 41)
    return(
         <section className=" w-screen h-auto  " > 
           <div className=" h-[15rem] sm:h-[25rem] md:h-[30rem] w-screem flex-col flex md:flex-row items-center md:justify-around " >
                 <div className=" md:flex flex-col items-center justify-center h-[30rem] w-[20rem] hidden " >
                   <h1 className="text-[3rem] orbitron font-bold bg-gradient-to-r from-orange-500 via-pink-400 to-red-600 bg-clip-text text-transparent " >Joker</h1>
                   <p className="text-center bebas-neue md:text-[0.8rem] lg:text-[1rem] text-gray-300" >In the heart of Gotham City, where society turns a blind eye to the forgotten and broken, Arthur Fleck struggles to find his place as a clown-for-hire and aspiring stand-up comedian..</p>
                   <NavLink  to={`/home/${ movieapi[0].id}`} >
                   <button className=" md:w-[13rem] lg:w-[15rem] mt-[1rem] text-[1.2rem] font-bold h-[3rem] bg-yellow-400 exo border-0 text-black hover:text-white rounded-[10px] flex  items-center justify-center gap-[1rem]  hover:bg-red-600 ease-in-out duration-100 " >Watch now <FaPlay className="h-[0.8rem]" /> </button>
                   </NavLink>
                
                 </div>
                   <figure className=" xl:h-[30rem] xl:w-[50rem] rounded-4xl  " >
                   <img className="w-full h-full object-cover rounded-4xl " src={jocker} alt="error in showing img" />
                   </figure>
           </div>
           <h1 className="text-white text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] md:mb-[-2rem]  lg:mb-0 lg:text-[4rem] outfit ml-[1rem] flex items-center " >Trending</h1>
           <div id="scroller" className=" md:items-center  h-[10rem] sm:h-[12rem] md:h-[15rem] lg:h-[20rem] mt-4 flex overflow-x-scroll space-x-5 md:space-x-8 px-4">
  {filteredmovie.map((movies, index) => (
    <NavLink to={`/home/${movies.id}`} key={movies.id}>
      <figure
        className=" h-[8rem]  w-[12rem] sm:h-[10rem] md:h-[12rem] sm:w-[15rem] md:w-[18rem] lg:h-[15rem] lg:w-[20rem] flex shrink-0 rounded-2xl overflow-hidden relative group items-center justify-center cursor-pointer transition-all duration-75 hover:scale-[1.1] text-gray-500 hover:text-white"
      >
        <figcaption className=" bg-opacity-50 text-center py-2 text-[3rem] md:text-[4rem] font-bold transition-all duration-300 group-hover:bg-opacity-80">
          {index + 1}
        </figcaption>
        <img
          src={customImages[index]}
          alt={`Movie ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </figure>
    </NavLink>
  ))}
</div>
            <div className=" h-[13rem] sm:h-[15rem] md:h-[25rem] " >
   <h1 className="text-white text-[1.5rem] md:text-[2rem] outfit ml-[1rem] flex items-center">
  Most Popular

</h1>
<div id="scroller" className=" h-[10rem] sm:h-[12rem] md:h-[15rem] lg:h-[20rem] lg:mt-4 flex items-center overflow-x-scroll space-x-5 md:space-x-8 px-4">
{filteredmovies .map((movies, index) => (
  <NavLink to={`/home/${movies.id}`} key={index} >
       <figure
      key={index}
      className=" group h-[8rem]  w-[8rem] sm:h-[10rem] sm:w-[12rem] md:h-[13rem] lg:h-[15rem] md:w-[15rem]  flex shrink-0 rounded-2xl  overflow-hidden relative group items-center justify-center cursor-pointer transition-all duration-75 hover:scale-[1.1] text-gray-500 hover:text-white hover:z-[20]">
      <img
        src={customImg[index]}
        alt={`Movie ${index + 1}`}
        className="w-full h-full  object-cover object-top "
      />
    </figure>
  </NavLink>
  ))}
</div>
            </div>
            <div className="  md:mt-[-5rem] lg:mt-0 md:h-[18rem] lg:h-[20rem]">
            <h1 className="text-white text-[1.5rem] md:text-[2rem] outfit ml-[1rem] flex items-center ">
   <span className="text-red-400" >H</span>ORROR

</h1>
<div id="scroller" ref={triggerpoint} className="h-[10rem] items-center sm:h-[12rem] md:h-[20rem] lg:mt-4 flex overflow-x-scroll space-x-5 md:space-x-8 px-4">
  {filtered.map((movies, index) => (
     <NavLink to={`/home/${movies.id}`} key={index} >
         <figure
      key={index}
      className=" h-[8rem]  w-[8rem] sm:h-[10rem] sm:w-[12rem] md:w-[15rem] md:h-[13rem] lg:h-[15rem]   flex shrink-0 rounded-2xl  overflow-hidden relative group items-center justify-center cursor-pointer transition-all duration-75 hover:scale-[1.1] text-gray-500 hover:text-white  "
    >
      <img
        src={custom[index]}
        alt={`Movie ${index + 1}`}
        className="w-full h-full object-cover object-top "
      />
    </figure>
     </NavLink>
  ))}
</div>     
 </div>
    <section ref={sectionRef} className=" h-[50rem] md:h-[55rem] lg:h-[50rem] xl:h-screen cursor-pointer flex relative overflow-hidden  w-screen  bg-black text-white py-20">
              <h1 ref={textRef} className=" text-[2rem] md:text-[4rem] lg:text-[5rem] kanit-bold  leading-tight h-[20rem] text-gray-400 z-20 ">Anytime Anywhere <br /><span className="  bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent" >  Movie magic</span></h1>
              <div className="absolute grid  grid-cols-6 lg:grid-cols-8  ">
               {images.map((img, i) => (
           <img
          key={i}
          ref={(el) => (imagesRef.current[i] = el)}
          onMouseEnter={() =>
            gsap.to(imagesRef.current[i], { opacity: 1, duration: 0.4, ease: "power2.out" })
          }
          onMouseLeave={() =>
            gsap.to(imagesRef.current[i], { opacity: 0, duration: 0.4, ease: "power2.out" })
          }
          src={img.src}
          alt={img.alt}
          className=" h-[5rem]  md:w-[13rem] md:h-[10rem] object-cover object-top rounded-4xl shadow-md z-30 "
          style={{ opacity: 0 }} 
        />
      ))}
      </div>
      <section ref={sectionRef2}  className="bg-black lg:bg-[#FEB804] absolute  flex flex-col items-center lg:flex-row  top-0 left-0 h-full w-screen z-40 md:rounded-4xl " >
        <div className=" xl:ml-[2rem] w-full mt-[2rem] lg:h-[50rem] lg:ml-[-4rem] text-center  md:flex md:items-center md:justify-center md:w-[70rem]  " >
        <h1 className=" kanit-bold text-[1.5rem] md:text-[1.7rem] lg:text-[2.5rem] xl:text-[4rem] leading-tight border-0  lg:text-black " >Awards-Winning Legends <br />Now Streaming
        </h1>
        </div>   
          <div className=" relative  w-[20rem]  lg:w-[50rem] h-auto z-50 mt-[2rem]  lg:mt-[-25rem] xl:ml-[10rem] flex flex-col  ">
                 <NavLink  to={`/home/${movieapi[30].id}`} >
                <div ref={list} className=" h-[20rem] w-[20rem] lg:h-[30rem] absolute  border-[1px] z-60 rounded-2xl border-black lg:w-[30rem] bg-gray-100" >
                  <div className="h-[2rem]  border-b-[1px] border-b-black ">
                        <div className="h-[2rem] flex text-black font-bold items-center justify-center w-[4rem] " >
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black " >01</h1>
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black "  >06</h1>
                        </div>
                  </div>
                  <div className=" h-[8rem] lg:h-[13rem] flex  w-full border-b-[1px] " >
                    <div className="text-black text-[2rem] lg:text-[4rem] w-[4rem] border-r-[1px] border-r-black " >
                    <MdMovie />
                    </div>
                    <div className="flex flex-col items-center text-black" >
                      <h1 className=" text-[2rem] lg:text-[3rem] ml-[1rem] orbitron " >Oppenheimer</h1>
                      <p className="ml-[1rem] text-[0.6rem] md:text-[0.7] lg:text-[1rem] text-bold" > This biographical thriller chronicles the life of J. Robert Oppenheimer, the American physicist pivotal in developing the atomic bomb during World War II.</p>
                    </div>
                  </div>  
                   <div className=" h-[9rem] w-[18rem] ml-[1.5rem] lg:h-[14rem] lg:w-[25rem] lg:ml-[2.5rem] md:hover:scale-[1.1] md:hover:shadow-[0px_0px_20px_gold] ease-in-out duration-100 rounded-2xl border-t-[1px] border-t-black " >
                    <img className="w-full h-full object-cover rounded-2xl  " src={award} alt="error in showing img" />
                   </div>
                </div>
                </NavLink>
                <NavLink to={`/home/${movieapi[31].id}`} >
                <div ref={list2} className=" h-[20rem] w-[20rem] lg:h-[30rem] absolute border-[1px] z-50 rounded-2xl border-black lg:w-[30rem] bg-gray-100" >
                  <div className="h-[2rem]  border-b-[1px] border-b-black ">
                        <div className="h-[2rem] flex text-black font-bold items-center justify-center w-[4rem] " >
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">02</h1>
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">06</h1>
                        </div>
                  </div>
                  <div className=" h-[8rem] lg:h-[13rem] flex  w-full border-b-[1px] " >
                    <div className="text-black text-[2rem] lg:text-[4rem] w-[4rem] border-r-[1px] border-r-black " >
                    <RiMovieAiFill />
                    </div>
                    <div className="flex flex-col items-center text-black" >
                      <h1 className=" text-[2rem] lg:text-[3rem] orbitron text-center " >RRR</h1>
                      <p className=" p-2 text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] text-bold" >RRR is a 2022 Indian epic action drama film directed by S.S. Rajamouli. Set in the 1920s, it tells the fictional story of two real-life revolutionaries, Alluri Sitarama Raju and Komaram Bheem, who fight against British colonial rule.</p>
                    </div>

                  </div>  
                   <div className=" h-[9rem] w-[18rem] lg:h-[14rem] lg:w-[25rem] ml-[1.5rem] lg:ml-[2.5rem] md:hover:scale-[1.1] md:hover:shadow-[0px_0px_20px_gold] ease-in-out duration-100 rounded-2xl border-t-[1px] border-t-black " >
                    <img className="w-full h-full object-cover rounded-2xl object-top  " src={award2} alt="error in showing img" />
                   </div>
                </div>
                </NavLink> 
                <NavLink to={`/home/${movieapi[32].id}`} >
                <div ref={list3} className=" h-[20rem] w-[20rem] lg:h-[30rem] absolute border-[1px] z-40 rounded-2xl border-black lg:w-[30rem] bg-gray-100" >
                  <div className="h-[2rem]  border-b-[1px] border-b-black ">
                        <div className="h-[2rem] flex text-black font-bold items-center justify-center w-[4rem] " >
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">03</h1>
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">06</h1>
                        </div>
                  </div>
                  <div className=" h-[8rem] lg:h-[13rem] flex  w-full border-b-[1px] " >
                    <div className="text-black text-[2rem] lg:text-[4rem] w-[4rem] border-r-[1px] border-r-black " >
                    <BiSolidMoviePlay />
                    </div>
                    <div className="flex flex-col text-black" >
                      <h1 className="  text-[2rem] md:text-[3rem] orbitron text-center " >Avatar</h1>
                      <p className="p-2  text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] text-bold" >Avatar is a sci-fi film set on the alien world of Pandora, where a Marine connects with the native Na’vi. It’s known for stunning visuals and became the highest-grossing movie eve</p>
                    </div>

                  </div>  
                   <div className=" h-[9rem] w-[18rem] lg:h-[14rem]  lg:w-[25rem] ml-[1.5rem] lg:ml-[2.5rem] md:hover:scale-[1.1] md:hover:shadow-[0px_0px_20px_gold] ease-in-out duration-100 rounded-2xl border-t-[1px] border-t-black " >
                    <img className="w-full h-full object-cover rounded-2xl object-top  " src={award3} alt="error in showing img" />
                   </div>


                </div>
                </NavLink>
                <NavLink to={`/home/${movieapi[33].id}`} >
                <div ref={list4} className=" h-[20rem] w-[20rem] lg:h-[30rem] absolute border-[1px] z-30 rounded-2xl border-black lg:w-[30rem] bg-gray-100" >
                  <div className="h-[2rem]  border-b-[1px] border-b-black ">
                        <div className="h-[2rem] flex text-black font-bold items-center justify-center w-[4rem] " >
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">04</h1>
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">06</h1>
                        </div>
                  </div>
                  <div className=" h-[8rem] lg:h-[13rem] flex  w-full border-b-[1px] " >
                    <div className="text-black text-[2rem] md:text-[4rem] w-[4rem] border-r-[1px] border-r-black " >
                    <MdMovieFilter />
                    </div>
                    <div className="flex flex-col text-black" >
                      <h1 className=" text-[2rem] lg:text-[3rem] orbitron text-center " >1917</h1>
                      <p className="ml-[1rem] text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] text-bold" >1917 is a World War I film that follows two British soldiers on a mission to deliver a crucial message. Shot to appear as one continuous take, it’s known for its immersive storytelling and cinematography.</p>
                    </div>

                  </div>  
                   <div className=" h-[9rem] w-[18rem] lg:h-[14rem] lg:w-[25rem] ml-[1.5rem] lg:ml-[2.5rem] hover:scale-[1.1] hover:shadow-[0px_0px_20px_gold] ease-in-out duration-100 rounded-2xl border-t-[1px] border-t-black " >
                    <img className="w-full h-full object-cover rounded-2xl object-top  " src={award4} alt="error in showing img" />
                   </div>
                </div>
                </NavLink>
                <NavLink to={`/home/${movieapi[34].id}`} >
                <div ref={list5} className="  h-[20rem] w-[20rem] lg:h-[30rem] absolute  border-[1px] z-20 rounded-2xl border-black lg:w-[30rem] bg-gray-100" >
                  <div className="h-[2rem]  border-b-[1px] border-b-black ">
                        <div className="h-[2rem] flex text-black font-bold items-center justify-center w-[4rem] " >
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">05</h1>
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">06</h1>
                        </div>
                  </div>
                  <div className=" h-[8rem] lg:h-[13rem] flex  w-full border-b-[1px] " >
                    <div className="text-black text-[2rem] md:text-[4rem] w-[4rem] border-r-[1px] border-r-black " >
                    <BiSolidCameraMovie />
                    </div>
                    <div className="flex flex-col text-black" >
                      <h1 className=" text-[2rem] lg:text-[3rem] orbitron text-center " >Joker</h1>
                      <p className="ml-[1rem] text-[0.6rem] md:text-[0.7rem] lg:text-[1rem] text-bold" > Joker is a psychological thriller that explores the origin of the iconic Batman villain. It follows Arthur Fleck, a struggling comedian, as he descends into madness and becomes the Joker..</p>
                    </div>

                  </div>  
                   <div className="  h-[8rem] w-[18rem]  lg:h-[14rem] lg:w-[25rem] ml-[1.5rem] lg:ml-[2.5rem] hover:scale-[1.1] hover:shadow-[0px_0px_20px_gold] ease-in-out duration-100 rounded-2xl border-t-[1px] border-t-black " >
                    <img className="w-full h-full object-cover rounded-2xl object-top  " src={award5} alt="error in showing img" />
                   </div>


                </div>
                </NavLink>
                 <NavLink>
                <div ref={list6} className=" h-[20rem] w-[20rem] lg:h-[30rem] absolute  border-[1px] z-10 rounded-2xl border-black lg:w-[30rem] bg-gray-100" >
                  <div className="h-[2rem]  border-b-[1px] border-b-black ">
                        <div className="h-[2rem] flex text-black font-bold items-center justify-center w-[4rem] " >
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">06</h1>
                                 <h1 className="border-r-[1px] h-full w-full text-center border-r-black">06</h1>
                        </div>


                  </div>
                  <div className=" h-[8rem] lg:h-[13rem] flex  w-full border-b-[1px] " >
                    <div className="text-black text-[2rem] lg:text-[4rem] w-[4rem] border-r-[1px] border-r-black " >
                  <BiSolidAward />
                    </div>
                    <div className="flex flex-col text-black" >
                      <h1 className=" text-[1.5rem] lg:text-[3rem] orbitron text-center text-black " > <span className="text-red-400 text-[2.5rem] " >O</span>scar-Winning</h1>
                      <p className="ml-[1rem] text-[0.6rem] md:text-[0.7ren] lg:text-[1rem] font-bold" >These films earned the highest honor in cinema, leaving a lasting mark with their brilliance and storytelling.</p>
                    </div>

                  </div>  
                   <div className=" h-[8rem] w-[18rem] lg:h-[14rem]  lg:w-[25rem] ml-[1.5rem] lg:ml-[2.5rem] hover:scale-[1.1] hover:shadow-[0px_0px_20px_gold] ease-in-out duration-100 rounded-2xl border-t-[1px] border-t-black " >
                    <img className="w-full h-full object-cover  rounded-2xl   " src={oskar} alt="error in showing img" />
                   </div>


                </div>
                </NavLink> 
          </div>
          <section   className={`h-auto lg:hidden fixed bottom-0 w-full transition-transform duration-300 z-50 lg:relative lg:mt-0`}>
      <h1 className=" text-[2rem] md:text-[3rem] text-white flex items-center outfit h-[4rem] ml-[1rem] mt-[2rem] md:mt-[5rem] ">
        <span className="text-pink-400">R</span>omentic
        <FaHandHoldingHeart className="text-white hover:text-red-400 ml-[0.5rem]" />
      </h1>
      <div
        id="scroller"
        ref={scrollerRef}
        className=" h-[14rem] md:h-[20rem]  w-full flex flex-nowrap md:items-center overflow-x-scroll gap-[1rem] md:gap-[5rem] md:px-[2rem] scroll-smooth"
      >
        {lovefilter.map((img, index) => (
          <NavLink to={`/home/${img.id}`} key={index} >
                  <figure
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            className=" h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[15rem] shrink-0 hover:scale-[1.1] hover:drop-shadow-[0px_0px_20px_pink] ease-in-out duration-300 rounded-2xl"
          >
            <img
              className="w-full h-full object-cover object-top rounded-2xl"
              src={loveImages[index]}
              alt="romantic"
            />
          </figure>
          </NavLink>
    
        ))}
      </div>
    </section>
     
    </section>
    </section>    
    <section   className={` hidden lg:block h-auto fixed bottom-0 w-full transition-transform duration-300 z-50 md:relative md:mt-0`}>
      <h1 className=" text-[2rem] md:text-[3rem] text-white flex items-center outfit h-[4rem] ml-[1rem] mt-[2rem]">
        <span className="text-pink-400">R</span>omentic
        <FaHandHoldingHeart className="text-white hover:text-red-400 ml-[0.5rem]" />
      </h1>
      <div
        id="scroller"
        ref={scrollerRef}
        className="  h-[22rem] xl:h-[30rem]  w-full flex flex-nowrap md:items-center overflow-x-scroll gap-[1rem]  xl:gap-[5rem] xl:px-[2rem] scroll-smooth"
      >
        {lovefilter.map((img, index) => (
          <NavLink to={`/home/${img.id}`} key={index} >
                  <figure
            key={index}
            ref={(el) => (imgRefs.current[index] = el)}
            className=" h-[20rem]  w-[20rem] lg:h-[25rem] lg:w-[20rem] shrink-0 hover:scale-[1.1] hover:drop-shadow-[0px_0px_20px_pink] ease-in-out duration-300 rounded-2xl"
          >
            <img
              className="w-full h-full object-cover object-top rounded-2xl"
              src={loveImages[index]}
              alt="romantic"
            />
          </figure>
          </NavLink>
    
        ))}
      </div>
    </section>
         </section>
    )
}
export default Movie