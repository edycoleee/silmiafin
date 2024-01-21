import { Route, Routes } from "react-router-dom"
import Landing from "./Landing/Landing"
import Login from "./pages/Login"
import Menu from "./Landing/Menu"
import Register from "./pages/Register"
import Syarat from "./Landing/Syarat"
import PrivateRoute from "./authentication/PrivateRoute"
import { AuthProvider } from "./authentication/AuthContext"

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/syarat" element={<Syarat />} />
          <Route element={<PrivateRoute />}>
            <Route path="/menu" element={<Menu />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
