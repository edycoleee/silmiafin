import dapur from '../assets/dapur.svg'
import pantai from '../assets/pantai.svg'
import berenang from '../assets/berenang.svg'
import pill from '../assets/pill.svg'
import { FaUserDoctor } from 'react-icons/fa6'
import { HiHome } from 'react-icons/hi2'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

function PendidikanKesehatan() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold m-5">Pandidikan Kesehatan</h3>
      </div>
      <div className="flex-col items-center justify-center grid md:grid-cols-2 ">
        <div onClick={() => navigate("/menu/pendidikankesehatan/makkol")} className="m-3 border rounded-lg shadow-xl bg-[#e0e0e0] flex flex-col items-center justify-center h-[325px] w-[400px]">
          <img src={dapur} alt="" className="mt-5" />
          <h3 className="text-1xl font-bold m-5">Tips Mengolah Makanan Bagi Penderita Kolestrol Tinggi</h3>
          <button className="w-[200px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Baca Artikel</button>
        </div>
        <div className="m-3 border rounded-lg shadow-xl bg-[#e0e0e0] flex flex-col items-center justify-center h-[325px] w-[400px]">
          <img src={pantai} alt="" className="mt-5" />
          <h3 className="text-1xl font-bold m-5">Traveling Aman bagi Penderita Diabetes Mellitus</h3>
          <button className="w-[200px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Baca Artikel</button>
        </div>
        <div className="m-3 border rounded-lg shadow-xl bg-[#e0e0e0] flex flex-col items-center justify-center h-[325px] w-[400px]">
          <img src={berenang} alt="" />
          <h3 className="text-1xl font-bold m-5">Manfaat Berenang Bagi Lansia</h3>
          <button className="w-[200px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Lihat Video</button>
        </div>
        <div className="m-3 border rounded-lg shadow-xl bg-[#e0e0e0] flex flex-col items-center justify-center h-[325px] w-[400px]">
          <img src={pill} alt="" />
          <h3 className="text-1xl font-bold m-5">Lupa minum obat hipertensi, apakah berbahaya?</h3>
          <button className="w-[200px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Lihat Video</button>
        </div>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-10 m-5" />
        <HiHome className="size-10 m-5" />
        <BiSolidMessageRoundedDetail className="size-10 m-5" />
      </div>
    </div>
  )
}

export default PendidikanKesehatan