import { BrowserRouter } from "react-router-dom"
import Allroutes from "./Routes/Allroutes"


function App() {
  return (
    <div className=" tablet:px-[3vw] md:px-[4vw]" >
  <BrowserRouter>
        <Allroutes/>
  </BrowserRouter>

    </div>
  )
}

export default App
