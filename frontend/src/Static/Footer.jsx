import { IoIosArrowForward } from "react-icons/io";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube, FaLinkedinIn, FaPhoneAlt   } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="bg-[#2B3940] w-full p-10 text-[#959ca0] mt-16 ">
      <main className="flex justify-between tablet:flex-col  tablet:gap-10 md:flex-wrap">
        <section className=" flex flex-col gap-2">
          <strong className="text-white text-[18px]">Company</strong>
          <nav className="flex items-center"> <IoIosArrowForward />About Us</nav>
          <nav className="flex items-center" > <IoIosArrowForward />Contact Us</nav>
          <nav className="flex items-center"> <IoIosArrowForward />Partners</nav>
          <nav className="flex items-center"> <IoIosArrowForward />Private Policy</nav>
        </section>

        <section className=" flex flex-col gap-2">
          <strong className="text-white text-[18px]"> Quick Links</strong>
          <nav className="flex items-center"> <IoIosArrowForward />Sign In</nav>
          <nav className="flex items-center"> <IoIosArrowForward />Contact Us</nav>
          <nav className="flex items-center" > <IoIosArrowForward />FAQ</nav>
          <nav className="flex items-center"> <IoIosArrowForward />Our Services</nav>
        </section>

        <section className=" flex flex-col gap-2 ">
          <strong className="text-white text-[18px]">Contact</strong>
            <div className="flex items-center gap-2">
             
              <CiLocationOn />
              <p>123 Street,New York,USA </p>
            </div>
            <div className="flex items-center gap-2">
            <FaPhoneAlt />
              <p>+1234567890 </p>
              
            </div>
            <div className="flex items-center gap-2">
            <MdEmail />
              <p>Group18@gmail.com </p>
              
            </div>
           <div className="flex gap-2 mt-2">
          <div className="w-[40px] h-[40px] p-3 border"> <TbBrandTwitterFilled /></div>
           <div className="w-[40px] h-[40px] p-3 border"> <FaFacebookF /></div>
           <div className="w-[40px] h-[40px] p-3 border"> <FaLinkedinIn /></div>
           <div className="w-[40px] h-[40px] p-3 border"> <FaYoutube /></div>
           </div>
        </section>

         <section>
            <strong className="text-white text-[18px]">Newsletter</strong>
            <p>Subscribe to Our NewsLetter</p>
            <input placeholder="your email" type="text" className="p-4 rounded-sm outline-none"/>
           </section>
      </main>

    </div>
  )
}

export default Footer