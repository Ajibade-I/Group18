import { SlCalender } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";

const JobCard = (props) => {
    const today = new Date()
    console.log(today)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] 
    const date = today.getDate()
    const Month = months[today.getMonth()]
    const Year = today.getFullYear()
  return (
    
        <div className="  bg-white w-full mt-10 flex px-10 tablet:flex-col tablet:py-4 h-[200px] tablet:h-[250px] hover:border justify-between items-center ">
            <div className="flex gap-5">
                <div className="w-[100px] h-[100px] tablet:h-[80px] border flex items-center justify-center">
                    <img src={props.image}/>
                </div>
                <div>
               
                      <div className="flex flex-col justify-center tablet:mt-0  mt-12">
                      <h3 className="font-bold  text-[18px]  text-[rgb(43,57,64)] text-left ">{props.title}</h3>
                           <div className="gap-5 tablet:gap-2 flex tablet:flex-col">
                                <div className=" gap-1 flex items-center" >
                                 <span className="text-[#00b074]"> {props.icon}</span>
                                 <span className="tablet:text-[12px]"> {props.text}</span>
                              </div>

                              <div className="flex items-center gap-1" >
                                 <span className="text-[#00b074]"> {props.icon1}</span>
                                 <span className="text-[12px]"> {props.text1}</span>
                             </div>

                                   <div className="flex items-center gap-1" >
                                      <span className="text-[#00b074]"> {props.icon2}</span>
                                       <span className="text-[12px]"> {props.text2}</span>
                                  </div>
                           </div>
                      </div>

                 </div>
                
            </div>

            <div>
                <div className="flex gap-4 tablet:gap-14">
                    <div className=" text-center  w-[40px] h-[40px] tablet:h-[40px] bg-[#EFFDF5] p-3 text-[#00b074]  "><FaRegHeart /></div>
                    <button className="bg-[#00b074] tablet:text-[10px] tablet:h-[40px] tablet:w-[120px] text-white rounded p-2 font-medium tablet:p-0 ">Apply Now</button>
                </div>
            <div className="gap-2 flex font-medium text-[#2b3940]">
               <span className="flex items-center gap-2">
               <SlCalender />
               Date Line: {date}
               
               </span>
               <span>
               {Month},
               </span>
               {Year}
            </div>
            </div>
        </div>
    
  )
}

export default JobCard 