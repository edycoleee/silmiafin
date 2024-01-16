import { Link } from 'react-router-dom'
import wayang from '../assets/wayang.svg'

const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center mt-5">
        <div className="mt-[50px] flex flex-col items-center justify-center">
          <h2 className="py-3 text-6xl font-bold">ABIYASA</h2>
          <h3 className="m-3 text-xl">Akses Bantu Kognitif Sayang Lansia</h3>
        </div>
        <img className="w-[350px] m-[50px]" src={wayang} alt="" />
        <div className="flex justify-center align-bottom">
          <h3 className="mt-5 text-xl">Dikembangkan oleh Poliklinik Geriatrik 2023</h3>
        </div>
        <div className="bg-neutral-700 mt-5 rounded-lg w-[100px] flex flex-col items-center ">
          <Link to="/login" className="m-3 text-white">Login</Link>
        </div>
      </div>
    </>
  )
}

export default Landing