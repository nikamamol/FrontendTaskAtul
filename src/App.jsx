import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import NavbarMain from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
   <BrowserRouter>
   <NavbarMain/>
   <Routes>
     <Route path="/" element={<Home />} />
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
