import React, { useState } from 'react'
import contact from "../assets/contact.jpg"
import { BsFillPhoneVibrateFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

function Contact() {
  const [change , setchange] = useState()

  const handlechange = ()=>{
    setchange(change)
  }

  const handlesubmit = (e)=>{
   e.preventDefault()
  }
  return (
    <>
    <section className='contact-main'>
      <div className='contact-effect'>
        <figure>
          <img className='contact-img1' src={contact} alt="error" />
        </figure>
        <h1 className='contact-h1'><b>
       <span>C</span>ontact US</b>
      </h1>
      </div>
    </section>
    <section className='contact-main2'>
      <div className='contact-effect2'>
        <h1 className='h1-first'>
          Contact
        </h1>
        <h1 className='h1-second'>
          Contact information
        </h1>
        <div className='contact-main2-1'>
          <div className='main2-1'>
            <div className='icon'>
            <BsFillPhoneVibrateFill />
            </div>
          <h1 className='main-1-h1'>+915437843</h1>
          <h2 className='main-2-1'>
           <h2>Phone: 9132367485</h2>
           <h3>Phone: 9146437485</h3>
          
          </h2>
          </div>
          <div className='main2-1'>
            <div className="icon">
            <MdEmail />
            </div>
          <h1 className='main-1-h1'>mail@gmail.com</h1>
          <h2 className='main-2'>
           Support@gmail.com
          </h2>
          </div>
          <div className='main2-1'>
            <div className="icon">
            <FaMapLocationDot />
            </div>
          <h1 className='main-1-h1'>Uttrakhand , India</h1>
          <h2 className='main-2-2'>
           2334 oak Nainital , Qa 76543 
          </h2>
          </div>
        </div>
      </div>

    </section>
    <section className='contact-main3'>
      <div className="text-area">
        <h1><span>F</span>orm</h1>
        <h2>Get in Touch !!</h2>
      </div>
      <div className="inputfeild">
        <form onSubmit={handlesubmit}>
          <label htmlFor="emails">
            <input type="email" name='emails' placeholder=' Enter your email' value={change} onChange={handlechange} />
          </label>
          <label htmlFor="Phone">
            <input type="number" name='Phone' placeholder='Enter Phone Number' value={change}  onChange={handlechange} />
          </label>
          <label htmlFor="Name">
            <input type="text" name='Name' placeholder='Enter your name'  value={change} onChange={handlechange} />
          </label>
          <label htmlFor="message">
            <input className='message' type="text" name='message' placeholder='Message' value={change}  onChange={handlechange} />
          </label>
          <button className='sub' type='submit'>Submit</button>
        </form>
      </div>
    </section>
    <div className='map'>
    <iframe className='address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27812.666926066784!2d79.43467111970844!3d29.382486012194914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a1bc28fd9d61%3A0x7cae7ba916987db3!2sNainital%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1737278832461!5m2!1sen!2sin" width="600" height="450" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </>
  )
}

export default Contact
