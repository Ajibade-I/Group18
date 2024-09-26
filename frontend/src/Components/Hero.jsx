

const Hero = () => {
  return (
    <div className="bg-covers  bg-no-repeat bg-cover h-dvh flex px-14  items-center   tablet:justify-center ">
       <div className="mt-20 tablet:mt-0"> 
       <h2 className=" font-extrabold  tablet:pt-14 montserrat-regular tablet:text-3xl  tablet:w-[220px] text-7xl text-white w-[850px]   ">Find The Best Startup Job That Fit You</h2>
       <p className="text-white w-[400px] py-4 tablet:w-full"> Whether you are an experienced professional or just starting out,our platform connects you with top employers across diverse industries.
       Discover the job that inspires and challenges you every day. Start your search now!
        </p>
     <div className="my-8 flex gap-5  tablet:text-[10px]   font-medium tablet:my-0 tablet:gap-6"> 
        <button className="p-5 animate-slide-in bg-[#00b074] text-white  rounded-md tablet:p-2   md:text-[12px]">
                SEARCH A JOB
            </button>
            <button className="p-5   bg-transparent text-[#00b074] border rounded-md md:text-[12px] tablet:p-2">
                FIND A TALENT
            </button></div>
       </div>
    

       
    </div>
  )
}

export default Hero