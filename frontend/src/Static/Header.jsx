import { NavLink } from "react-router-dom"
import { MdArrowDropDown } from "react-icons/md";


const Header = () => {
  return (
    <div className="w-full h-[70px] fixed bg-[#F2F2F2] flex justify-between items-center py-2 px-4">
        <h2 className="text-3xl montserrat-regular text-[#00b074] font-extrabold w-36">JobEntry</h2>
        <ul className="   hidden text-sm sm:flex gap-5 text-[#2b3940]   mr-12   font-medium">
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
                    <p className=" cursor-pointer hover:text-[#00B074] ">Job List</p>
                    <p className=" cursor-pointer hover:text-[#00B074] ">Job Details</p>
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

    </div>
  )
}

export default Header