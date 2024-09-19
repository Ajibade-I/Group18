import { BrowserRouter } from "react-router-dom"
import Allroutes from "./Routes/Allroutes"


function App() {
  return (
    <div className="tablet:px-[4vw] sm:px-[2vw] md:px-[7vw] lg:px-[2vw] " >
  <BrowserRouter>
        <Allroutes/>
  </BrowserRouter>

    </div>
  )
}

export default App
