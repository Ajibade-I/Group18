import { ClientDetails } from "../Utils/data"
import pix from "../assets/icons8-quote-left-48.png"

const ClientCard = () => {
  return (
    <div className="w-full flex items-center flex-col mt-32 tablet:mt-16">
        <h2 className="font-bold text-5xl text-[#2b3940] tablet:text-2xl ">Our Clients Says!!!</h2>
    <div className="w-full flex justify-evenly gap-2 my-10 px-10 tablet:gap-5 tablet:px-0 tablet:flex-col">
       
        {ClientDetails ?.map((items,i) => (
            <div key={i} className="bg-[#EFFDF5]  h-[300px] w-full py-8 px-5 tablet:py-2">
              <img src={pix}/>
               <p className="  font-medium text-[#666578] tablet:w-full ">{items.text}</p>
             <div className="flex my-7 gap-3">
             <img src={items.image}/>
             <div >
                <p className="text-[20px] font-medium"> {items.clientname}</p>
                <span> {items.profession}</span>
             </div>
 
             </div>
            </div>
        ))}
       </div>
    </div>
  )
}

export default ClientCard