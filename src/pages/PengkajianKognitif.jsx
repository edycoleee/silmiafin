import lampu from '../assets/lampu.svg'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function PengkajianKognitif() {
  const navigate = useNavigate();
  return (
    <div className=" h-screen flex flex-col items-center">
      <div className="m-5 flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold m-1">Pengkajian Kognitif</h3>
        <img className="mt-5 w-[125px]" src={lampu} alt="" />
        <h3 className="text-2xl font-bold ml-5 mr-5">Pengkajian Short Portable Mental Status Questionnaire (SPMSQ)</h3>
        <h3 className="text-2xl m-1">(Penilaian untuk mengetahui fungsi kognitif lansia)</h3>
        <button onClick={() => navigate("/menu/pengkajiankog/per1")} className="w-[200px] mt-8 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white mr-10 ">Mulai</button>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-10 m-5" />
        <HiHome className="size-10 m-5" />
        <BiSolidMessageRoundedDetail className="size-10 m-5" />
      </div>
    </div>
  )
}

export default PengkajianKognitif