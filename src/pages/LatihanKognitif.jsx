import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { IoMdPeople } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function LatihanKognitif() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="m-5 max-w-[1100px] flex flex-col items-center justify-center bg-[#F0D064] rounded-lg">
        <h3 className="text-4xl font-bold m-5">Halo, Ayo lalukan latihan kognitif secara berkala.</h3>
      </div>
      <div onClick={() => navigate("/menu/latkog/latkon")} className="grid md:grid-cols-2 gap-1 px-2 text-center">
        <div className="border w-[200px] h-[125px] rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <MdOutlinePeopleAlt className="text-gray-900 size-7" />
          <h3 className="mt-3 text-1xl font-bold">Latihan Konsentrasi</h3>
        </div>
        <div className="border w-[200px] h-[125px] rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <PiBrain className="text-gray-900 size-7" />
          <h3 className="mt-3 text-1xl font-bold">Latihan Mengingat</h3>
        </div>
        <div className="border w-[200px] h-[125px] rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <IoMdPeople className="text-gray-900 size-7" />
          <h3 className="mt-3 text-1xl font-bold">Latihan Koordinasi</h3>
        </div>
        <div className="border w-[200px] h-[125px] rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <MdSearch className="text-gray-900 size-7" />
          <h3 className="mt-3 text-1xl font-bold">Latihan Mencari Visual</h3>
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

export default LatihanKognitif