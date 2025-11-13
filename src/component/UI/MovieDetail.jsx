import React from 'react'
import { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useNavigate, useParams } from 'react-router-dom';
import movie from "../../../api/movie.json";
import star from "../../../public/img2/star.png";
function MovieDetail({addtowishlist}) {
  const { movieID } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [clickeded, setClickeded] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false)
  const isYouTube = data?.video?.includes("youtube.com/embed");

  useEffect(() => {
    const product = movie.find((p) => p.id === parseInt(movieID));
    setData(product || null);
    const isUserSubscribed = localStorage.getItem("subscribed") === "true";
    setIsSubscribed(isUserSubscribed);
  }, [movieID]);
  if (!data) {
    return <h2 className="text-white text-center mt-10">🚫 Product not found!</h2>;
  }
  const handleWatchClick = () => {
    if (data.premium){
      if (isSubscribed) {
        setClickeded(true); 
      } else {
        navigate(`/subscrips/${movieID}`); 
      }
    } else {
      setClickeded(true); 
    }
  };
  return (
    <>
    <section className=' h-screen md:h-auto overflow-hidden   w-screen flex  flex-col xl:flex-row xl:justify-end relative'>
      <figure className='lg:w-[65rem] h-[15rem] md:h-[30rem] xl:w-[50rem] lg::h-[40rem] xl:h-[51rem]'>
        <img src={data.img} className='h-full w-full object-fill  ' alt="error" />
      </figure>

      <div className="xl:absolute text-white  md:bottom-0 top-0 flex flex-col ml-[1rem] mt-[1rem] md:mt-0 md:ml-[2rem]  justify-center left-0 xl:h-full w-auto">
        <h1 className='text-bold text-[1.5rem] sm:text-[2rem] md:text-[3rem] exo-2'>{data.title}</h1>
        <h2 className='text-green-600 text-[0.8rem] sm:text-[1rem] md:text-[1.2rem] font-bold'>{data.h2}</h2>
        <p className='mt-[1rem] hidden md:block font-bold md:w-[45rem] xl:w-[40rem]'>{data.para}</p>

        <div className='mt-[1rem] w-[20rem] text-[0.6rem] sm:text-[1rem] sm:w-[30rem] flex items-center justify-around font-bold h-[2rem]'>
          <h1 className='h-[1.5rem] flex justify-center items-center  sm:h-full w-[5rem] md:w-[8rem] text-center bg-gray-200 text-black rounded-[10px]'>{data.Movie}</h1>
          <h1 className='text-[0.6rem] sm:text-[1rem]'>{data.hours}</h1>
          <h1 className="text-[0.6rem] sm:text-[1rem]" >{data.month}</h1>
          <h1 className='h-[1.5rem] flex justify-center items-center  sm:h-full w-[5rem] md:w-[8rem] text-center bg-gray-200 text-black rounded-[10px]'>{data.ua}</h1>
        </div>

        <h2 className='mt-[1rem] text-[0.8rem]  sm:text-[1rem] font-bol'>{data.type}</h2>

        <div className='mt-[1rem] w-[20rem] h-[5rem] flex items-center justify-around'>
          <button
            onClick={handleWatchClick}
            className='h-[3rem] md:h-[4rem] w-[10rem] flex items-center justify-center bg-gray-800 rounded-[10px] hover:scale-[1.1] hover:bg-gray-200 hover:text-black ease-in-out duration-150'
          >
            {data.premium ? (
              <>
                {isSubscribed ? "Watch now" : "Subscribe"} <img src="/img2/star.png" alt="error" className="w-[2rem] h-[2rem]" />
              </>
            ) : (
              "Watch now"
            )}
          </button>

          <div className='relative group inline-block'>
            <button onClick={()=> { addtowishlist(data , "movie" )}} className='h-[3rem] w-[3rem] flex justify-center items-center hover:scale-[1.2] hover:text-black hover:bg-white bg-gray-800 rounded-4xl text-white'>
              <FaPlus />
            </button>
            <div  className="absolute left-1/2 top-[-3.5rem] -translate-x-1/2 mt-2 text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
              Watchlist
            </div>
          </div>
          <div className='relative group inline-block'>
            <button
              onClick={() => setClicked(!clicked)}
              className={`h-[3rem] w-[3rem] flex justify-center items-center hover:scale-[1.2] text-white ${clicked ? "bg-red-600" : "bg-gray-800"} rounded-4xl`}
            >
              <AiOutlineLike />
            </button>
            <div className="absolute left-1/2 top-[-3.5rem] -translate-x-1/2 mt-2 text-sm text-white bg-black/80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
              Like
            </div>
          </div>
        </div>
      </div>

      {clickeded && (
        <div className="absolute top-0 left-0 w-full h-[35rem]  md:h-full flex justify-center items-center bg-black/90 z-50">
                {data.video.includes("youtube.com/embed") ? (
      <iframe
        className="h-[15rem] md:h-full w-full object-contain"
        src={data.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <video
        id="myVideo"
        className="h-[15rem] md:h-full w-full object-contain"
        loop
        muted
        controls
        src={data.video}
      />
    )}
          <button
            onClick={() => setClickeded(false)}
            className="absolute top-5 right-5 bg-gray-800 hover:bg-white hover:text-gray-950 text-white px-4 py-2 rounded-lg font-bold z-50"
          >
            ❌ Close
          </button>
        </div>
      )}
    </section>
    </>
  )
}
export default MovieDetail