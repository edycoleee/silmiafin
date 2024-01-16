import { Route, Routes } from "react-router-dom"
import Landing from "./Landing/Landing"
import Login from "./Landing/Login"
import Menu from "./Landing/Menu"
import Register from "./Landing/Register"
import Syarat from "./Landing/Syarat"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/syarat" element={<Syarat />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
