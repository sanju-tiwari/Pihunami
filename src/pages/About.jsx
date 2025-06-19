import React from 'react'
import naruto from "../assets/about/naruto.png"
import about from "../assets/about/about.jpg"
import about1 from "../assets/about/about1.jpg"
import about2 from "../assets/about/about2.jpg"
import about3 from "../assets/about/about3.jpg"
import about4 from "../assets/about/about4.png"
import pikachu from "../assets/about/pikachu.jpg"
function About() {
  return (
    <>
    <section className='about-main'>
      <div className='about-effect'>
        <div className="abouttext">
        <h1> <span>A</span>bout me</h1>
        <p>
        Hey there, fellow anime enthusiast! I'm Sanju Tiwari, and welcome to my little corner of the internet where anime magic happens.
        </p>
        </div>
        <figure>
          <img className='naruto' src={naruto} alt="error" />
        </figure>
      </div>
    </section>
    <section className='about-main2'>
      <div className='about-effect2'>
        <h1><span>W</span>hat You'll Find Here</h1>
        <div className="about-img">
          <figure>
            <img className='img-about' src={about} alt="error" />
            <h1>Anime Reviews</h1>
          </figure>
          <figure className='figure-1'>
            <img className='img-about img-1' src={about3} alt="error" />
            <h1>Character Analyses</h1>
          </figure>
          <figure>
            <img className='img-about' src={about1} alt="error" />
            <h1>Recommendations</h1>
          </figure>
          <figure  className='figure-1'>
            <img className='img-about img-1' src={about2} alt="error" />
            <h1>Fan Theories</h1>
          </figure>
        </div>
      </div>
    </section>
    <section className='about-main3'>
      <div className='about-effect3'>
        <figure>
          <img className="pokemon" src={pikachu} alt="error" />
           <h1><span>W</span>hy Anime</h1>
           <p>Anime is more than just an animation style to me; it's a gateway to different worlds, fascinating characters, and incredible stories. It’s where I find inspiration, joy, and sometimes even a life lesson or two.</p>
        </figure>
      </div>
      <figure>
        <img className='about4' src={about4} alt="error" />
      </figure>
    </section>
    <div className='about-effect3-1'>
        <h1><span>J</span>oin Me on This Journey!</h1>
      </div>
      <h2 className='join-h2'>
      If you share my passion for anime, you're in the right place. Let's geek out together, share our favorite moments, and discover new and exciting anime worlds. Feel free to leave a comment, share your thoughts, or just say hello!
      </h2>
    </>
  )
}

export default About
