import { Routes, Route } from "react-router-dom"
import Header from "./Static/Header"
import Home from "./Pages/Home"
import Footer from "./Static/Footer"
import About from "./Pages/About"
import Jobdetails from "./Pages/Jobdetails"
import Joblist from "./Pages/Joblist"
import  Contact from "./Pages/Contact"
import Jobs from "./Pages/Jobs"




const App=() => {
  return (
    <div className=" z-10 bg-[#F2F2F2] tablet:px-[4vw] sm:px-[2vw] md:px-[7vw] lg:px-[2vw] " >
 
     <Header/>
       
       <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/joblist" element={<Joblist/>}></Route>
            <Route path="/jobdetails" element={<Jobdetails/>}></Route>
        </Routes>
       <Footer/>

    </div>
  )
}

export default App
