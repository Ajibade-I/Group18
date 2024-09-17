import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Header from "../Static/Header"
import Footer from "../Static/Footer"
import Contact from "../Pages/Contact"
import Jobs from "../Pages/Jobs"



const Allroutes = () => {
  return (
    <div>
        <Header/>
       
       <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
        </Routes>
       <Footer/>
    </div>
  )
}

export default Allroutes