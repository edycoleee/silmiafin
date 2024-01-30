import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Pertanyan10() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold m-10">Pertanyaan 10</h3>
        <h3 className="text-3xl">Berapa hasil 20 kurang 3?</h3>
        <input type="text" placeholder="Tuliskan jawaban anda" className="bg-gray-100 w-[300px] p-2 m-10 rounded-md text-1xl" />
        <h3 className="text-3xl">Lalu kurangi 3 lagi?</h3>
        <input type="text" placeholder="Tuliskan jawaban anda" className="bg-gray-100 w-[300px] p-2 m-10 rounded-md text-1xl" />
        <h3 className="text-3xl">Dan di kurangi 3 lagi?</h3>
        <input type="text" placeholder="Tuliskan jawaban anda" className="bg-gray-100 w-[300px] p-2 m-10 rounded-md text-1xl" />
        <button onClick={() => navigate("/menu/pengkajiankog")} className="w-[250px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Pertanyan Berikutnya</button>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-10 m-5" />
        <HiHome className="size-10 m-5" />
        <BiSolidMessageRoundedDetail className="size-10 m-5" />
      </div>
    </div>
  )
}

export default Pertanyan10