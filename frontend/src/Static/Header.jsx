import {useState} from "react";
import { NavLink} from "react-router-dom"
import { MdArrowDropDown, MdClose} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi"


const Header = () => {
        const [show, setshow] = useState(false)
        
        
        const MenuDropDown = () => {
            setshow(!show)
        }
        
      



  return (
    <div className="w-full  h-[70px] py-2  bg-[rgb(252,251,251)] flex justify-between items-center">
        <h2 className="text-3xl montserrat-regular px-3 text-[#00b074] font-extrabold w-36">JobEntry</h2>
        <ul className="   tablet:hidden hidden text-sm sm:flex gap-5 text-[#2b3940]   px-3   font-medium">
            <NavLink to="/" className=" my-3 flex flex-col items-center gap-1  " >
                <p>HOME</p>
                 <hr className="hidden w-2/4 h-[1.5px] border-none bg-[#00b074]"/> 
            </NavLink>  

            
            <NavLink to="/about" className="flex  my-3  flex-col items-center  gap-1 hover:text-[#00b074]" >
                <p >ABOUT</p>
                 <hr className="hidden w-2/4 h-[1.5px] border-none bg-[#00b074]"/> 
            </NavLink>

            <div className=" group relative my-3 " >
                <p className="flex items-center hover:text-[#00B074] cursor-pointer">JOBS
                <MdArrowDropDown size={20}  />
                </p>
                <div className="group-hover:block hidden absolute right-0   pt-4">
                    <div className="flex flex-col gap-2  w-36 px-5 text-[#2B3940] bg-white border rounded mt-3  py-3">
                    <NavLink to="/joblist" className=" cursor-pointer hover:text-[#00B074] ">Job List</NavLink>
                    <NavLink to="/jobdetails" className=" cursor-pointer hover:text-[#00B074] ">Job Details</NavLink>
                    </div>
                </div>
                
            </div>
            <NavLink to="/contact" className="flex  my-3  flex-col items-center gap-1 text-hidden" >
                <p>CONTACT</p>
                <hr className=" hidden w-2/4 h-[1.5px] border-none bg-[#00b074]"/> 
            </NavLink>

            <div className="gap-5 flex px-2"> 
            <button className="w-[140px] h-[40px] bg-[#00b074] text-white  rounded-md">
                LOGIN
            </button>
            <button className="w-[140px] h-[40px] bg-[#00b074] text-white rounded-md">
                REGISTER
            </button>
            </div> 
            
        </ul>

     <div onClick={MenuDropDown} className="mr-2 lg:hidden  "  >
    <GiHamburgerMenu size={22}   />
    </div>

   <nav className={`fixed bg-white lg:hidden  text-[#2b3940] top-0 bottom-0 px-8 pt-5  duration-1000 ease-in transition-all ${show ? "left-0 w-full" :"left-full w-full"}`}>
  
    <div className="flex justify-end  mt-3 lg-hidden  " onClick={MenuDropDown}>
            <MdClose size={22}/>
    </div>
           <ul onClick={MenuDropDown} >
           
               {show ?
                 <div className="flex flex-col mt-10">
                   <NavLink to="/" className="border-b-2" >
                     HOME
                  </NavLink>
                  <NavLink to="/about" className="border-b-2" >
                     ABOUT
                  </NavLink>
                  <NavLink to="/contact" className="border-b-2" >
                     CONTACT
                  </NavLink>
                  
                        
          
                   </div>
              :null} 
           </ul>     
        {show && (
           <div>
               <div className=" group relative my-3 " >
                <p className="flex items-center hover:text-[#00B074] cursor-pointer">JOBS
                <MdArrowDropDown size={20}  />
                </p>
                <div className="group-hover:block hidden    pt-4">
                    <div className="flex flex-col gap-2  w-36 px-5 text-[#2B3940] bg-white border rounded mt-3  py-3">
                    <NavLink to="/joblist" className=" cursor-pointer hover:text-[#00B074] ">Job List</NavLink>
                    <NavLink to="/jobdetails" className=" cursor-pointer hover:text-[#00B074] ">Job Details</NavLink>
                    </div>
                </div>
                
            </div>
          <div className="mt-6 flex flex-col w-full gap-2 ">
          <button className="w-full h-[40px] bg-[#00b074]  text-white  rounded-md">
               LOGIN
           </button>
           <button className="w-full h-[40px] bg-[#00b074] text-white rounded-md">
               REGISTER
           </button>
          </div>   
           </div>
        )  
      

    } 
                
   </nav>
    
      
    </div>
  )
}

export default Header