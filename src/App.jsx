import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="/sign-up" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>

  </Routes>
  </BrowserRouter>
}

