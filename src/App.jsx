import { Route, Routes } from "react-router-dom"
import Landing from "./Landing/Landing"
import Login from "./pages/Login"
import Menu from "./Landing/Menu"
import Register from "./pages/Register"
import PrivateRoute from "./authentication/PrivateRoute"
import { AuthProvider } from "./authentication/AuthContext"
import LengkapiBiodata from "./pages/LengkapiBiodata"
import PengkajianKognitif from "./pages/PengkajianKognitif"
import LatihanKognitif from "./pages/LatihanKognitif"
import PendidikanKesehatan from "./pages/PendidikanKesehatan"
import MakananKolesterol from "./pages/MakananKolesterol"
import LatihanKonsentrasi from "./pages/LatihanKonsentrasi"

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/menu" element={<Menu />} />
          </Route>
          <Route path="/menu/biodata" element={<LengkapiBiodata />} />
          <Route path="/menu/pengkajiankog" element={<PengkajianKognitif />} />
          <Route path="/menu/latkog" element={<LatihanKognitif />} />
          <Route path="/menu/latkog/latkon" element={<LatihanKonsentrasi />} />
          <Route path="/menu/pendidikankesehatan" element={<PendidikanKesehatan />} />
          <Route path="/menu/pendidikankesehatan/makkol" element={<MakananKolesterol />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
