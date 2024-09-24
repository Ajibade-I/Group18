import { Link } from "react-router-dom"
import { CiLocationOn } from "react-icons/ci";
import {  FaPhoneAlt   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactInput from "../Components/ContactInput";

const Contact = () => {
  return (
    <div className="w-full ">
      <div className="bg-cover bg-no-repeat bg-coverabout bg-left flex px-14  items-center">
      <div>
       <h1 className="font-bold montserrat-regular text-white text-5xl tablet:text-3xl">Contact Us </h1>
      
       <div className="flex gap-2 font-medium">
       <Link to="/" className="text-[#0e9f6e]">HOME</Link>
          <span className="text-white">/</span>
        <Link to="/contact" className="text-[#0e9f6e]"> ABOUT</Link>
        <span className="text-white">/</span>
        <span className="text-white">CONTACT</span>
      </div>
      </div>
      </div>

      <div className="flex-col  flex my-14 px-14 tablet:px-0">
        <h2 className="font-bold text-4xl text-[#2b3940] text-center tablet:text-2xl ">Contact For Any Query</h2>

        <div className="flex gap-8 mt-14 tablet:flex-col ">
          <div className="flex flex-col  text-white  montserrat-regular gap-4 px-10 py-10 bg-[#00b074] h-[50vh] tablet:h-[80vh] lg:h-[60vh] w-full  ">
             <p className="w-[400px] tablet:text-[12px] tablet:w-[200px]"> Fill Out the form, our team will get back to you within 24hrs</p>
              <div className="flex items-center gap-2">
              <div className="w-[50px] h-[50px] border p-4 text-[#EFFDF5]"><CiLocationOn /></div>
              <p>123 Street, New York, USA</p>
             </div>
          
               <div className="flex items-center gap-2">
               <div className="w-[50px] h-[50px] border p-4 text-[#EFFDF5]"><MdEmail /></div>
               <p>group18@gmail.com</p>
               </div>
                 
                 <div  className="flex items-center gap-2">
                 <div className="w-[50px] h-[50px] border p-4 text-[#EFFDF5]"><FaPhoneAlt /></div>
                 <p>+1234567890</p>
                 </div>
          </div>
             <ContactInput/>
       
        </div>
      </div>
          
    </div>
  )
}

export default Contact