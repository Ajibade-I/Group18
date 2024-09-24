import { Link } from "react-router-dom"
import TalentCard from "../Components/TalentCard"

const About = () => {
  return (
    
    <div>
      <div className="bg-cover  bg-no-repeat bg-coverabout flex items-center  bg-left px-14 ">
      <div>
       <h1 className="font-bold montserrat-regular text-white text-5xl tablet:text-3xl ">About Us </h1>
      
       <div className="flex gap-2 font-medium">
       <Link to="/" className="text-[#0e9f6e]">HOME</Link>
          <span className="text-white">/</span>
        <Link to="/contact" className="text-[#0e9f6e]"> CONTACT</Link>
        <span className="text-white">/</span>
        <span className="text-white">ABOUT</span>
       </div>
        </div>
        
    </div > 
       <div className="mt-20"> <TalentCard/></div>
    </div>
  )
}

export default About