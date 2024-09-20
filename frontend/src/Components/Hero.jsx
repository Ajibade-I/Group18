

const Hero = () => {
  return (
    <div className="bg-covers  bg-no-repeat bg-cover h-dvh flex px-14  items-center ">
       <div>
       <h2 className=" font-extrabold  montserrat-regular text-6xl text-white w-[800px] ">Find The Best Startup Job That Fit You</h2>
       <p className="text-white w-[400px] py-4"> Lorem ipsum dolor sit amet, Fusce rutrum nibh nec nulla eleifend, 
        sed commodo tortor rutrum. Suspendisse fringilla, felis placerat tincidunt semper</p>
     <div className="my-8 flex gap-5 font-medium"> 
        <button className="p-5 bg-[#00b074] text-white  rounded-md">
                SEARCH A JOB
            </button>
            <button className="p-5  bg-transparent text-[#00b074] border rounded-md">
                FIND A TALENT
            </button></div>
       </div>
    

       
    </div>
  )
}

export default Hero