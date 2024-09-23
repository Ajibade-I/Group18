import pix from "../assets/bg-patternimg.jpg"
import pix1 from "../assets/about-1.jpeg"
import pix2 from "../assets/about-2.jpeg"
import pix3 from "../assets/about-3.jpeg"
import pix4 from "../assets/about-4.jpeg"
import { TiTick } from "react-icons/ti";

const TalentCard = () => {
  return (
    <div className="w-full flex tablet:gap-8 gap-10 tablet:flex-col md:flex-col   ">
        
        <div className="h-[625px]  tablet:relative bottom-32 w-[700px] tablet:h-[400px] tablet:w-full ">
   
       <img src={pix2} className=" w-[280px] tablet:w-[130px] tablet:left-0 tablet:ml-32 tablet:mt-48  absolute  left-72  ml-14 mt-10"/>
     
        <img src={pix1} className="absolute w-[320px] tablet:w-[130px] tablet:h-[160px] ml-10 tablet:left-0 tablet:ml-0  tablet:mt-40"/>
        
        <img src={pix4}  className=" w-[306px]  tablet:w-[135px] tablet:h-[137px] absolute h-[300px]   ml-36  left-60 mt-80 tablet:left-40 tablet:ml-0"/>
        <img src={pix3} className="w-[281px]  tablet:w-[130px]  absolute  mt-80  ml-20 tablet:left-0 tablet:ml-8  "/>
        
       
       <img src={pix} className="w-full h-[620px] object-contain  "/>
       
       </div> 
       <div className="py-8 tablet:py-0 text-[#2b3940]">
        <h2 className="font-bold text-4xl tablet:text-2xl tablet:w-[300px] montserrat-regular  w-[600px]">We Help To Get The Best Job And Find A Talent</h2>
        <p className="w-[400px] py-4 tablet:w-[300px]">Lorem ipsum dolor sit amet, Fusce rutrum nibh nec nulla eleife consectetur adipiscing elit.
             Fusce rutrum nibh nec nulla eleife   
        </p>
          <div className="flex flex-col  gap-4">
          <span className="flex items-center gap-2">
            <TiTick color={`#00b074`} />
            Fusce rutrum nibh nec nulla eleife 
        </span>
        <span className="flex items-center gap-2 ">
            <TiTick color={`#00b074`} />
            Fusce rutrum nibh nec nulla eleife 
        </span>
        <span className="flex items-center gap-2">
            <TiTick color={`#00b074`} />
            Fusce rutrum nibh nec nulla eleife 
        </span>
          </div>
          <button className="p-3 my-8 lg:w-[200px] bg-[#00b074] text-white rounded tablet:w-full md:w-full" >
            Read More
            </button>
       </div>
    </div>
  )
}

export default TalentCard