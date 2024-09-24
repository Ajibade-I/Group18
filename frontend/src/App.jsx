import { Route, Routes } from "react-router-dom"
import LoginForm from "./Login Form/login"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Jobdetails from "./Pages/Jobdetails"
import Joblist from "./Pages/Joblist"
import Jobs from "./Pages/Jobs"
import Footer from "./Static/Footer"
import Header from "./Static/Header"
import Registration from "./Register Form/register"




const App=() => {
  return (
    <div className="tablet:px-[4vw] sm:px-[2vw] md:px-[7vw] lg:px-[2vw] " >
 
     <Header/>
       
       <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/jobs" element={<Jobs/>}/>
            <Route path="/joblist" element={<Joblist/>}></Route>
            <Route path="/jobdetails" element={<Jobdetails/>}></Route>
            <Route path="/register" element={<Registration />} /> 
            <Route path="/login" element={<LoginForm />} /> 
        </Routes>
       <Footer/>

    </div>
  )
}

export default App
