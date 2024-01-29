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
import Pertanyan1 from "./Landing/Pertanyaan/Pertanyan1"
import Pertanyan2 from "./Landing/Pertanyaan/Pertanyan2"
import Pertanyan3 from "./Landing/Pertanyaan/Pertanyan3"
import Pertanyan4 from "./Landing/Pertanyaan/Pertanyan4"
import Pertanyan5 from "./Landing/Pertanyaan/Pertanyan5"
import Pertanyan6 from "./Landing/Pertanyaan/Pertanyan6"
import Pertanyan7 from "./Landing/Pertanyaan/Pertanyan7"
import Pertanyan8 from "./Landing/Pertanyaan/Pertanyan8"
import Pertanyan9 from "./Landing/Pertanyaan/Pertanyan9"
import Pertanyan10 from "./Landing/Pertanyaan/Pertanyan10"

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
          <Route path="/menu/pengkajiankog/per1" element={<Pertanyan1 />} />
          <Route path="/menu/pengkajiankog/per2" element={<Pertanyan2 />} />
          <Route path="/menu/pengkajiankog/per3" element={<Pertanyan3 />} />
          <Route path="/menu/pengkajiankog/per4" element={<Pertanyan4 />} />
          <Route path="/menu/pengkajiankog/per5" element={<Pertanyan5 />} />
          <Route path="/menu/pengkajiankog/per6" element={<Pertanyan6 />} />
          <Route path="/menu/pengkajiankog/per7" element={<Pertanyan7 />} />
          <Route path="/menu/pengkajiankog/per8" element={<Pertanyan8 />} />
          <Route path="/menu/pengkajiankog/per9" element={<Pertanyan9 />} />
          <Route path="/menu/pengkajiankog/per10" element={<Pertanyan10 />} />
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
