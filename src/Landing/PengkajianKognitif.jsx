import lampu from '../assets/lampu.svg'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";

function PengkajianKognitif() {
  return (
    <div className=" h-screen flex flex-col items-center">
      <div className="m-[50px] flex flex-col items-center justify-center">
        <h3 className="text-6xl font-bold m-1">Pengkajian Kognitif</h3>
        <img className="mt-11 w-[175px]" src={lampu} alt="" />
        <h3 className="text-3xl font-bold m-1">Pengkajian Short Portable Mental Status Questionnaire (SPMSQ)</h3>
        <h3 className="text-3xl m-1">(Penilaian untuk mengetahui fungsi kognitif lansia)</h3>
        <button className="w-[300px] mt-10 py-3 bg-[#202020] hover:bg-[#272727] rounded-lg text-white text-xl mr-10 ">Mulai</button>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-16 m-5" />
        <HiHome className="size-16 m-5" />
        <BiSolidMessageRoundedDetail className="size-16 m-5" />
      </div>
    </div>
  )
}

export default PengkajianKognitif