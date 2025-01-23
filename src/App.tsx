
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home }  from "./components/Home"
import { VideoComponent } from "./components/VideoComponent"

function App() {
  return (
    <div className=''>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/room/:roomID" element={<VideoComponent />} /> 
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
