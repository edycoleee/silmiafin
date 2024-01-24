import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { IoMdPeople } from "react-icons/io";
import { MdSearch } from "react-icons/md";

function LatihanKognitif() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="m-20 max-w-[1100px] flex flex-col items-center justify-center bg-[#F0D064] rounded-lg">
        <h3 className="text-6xl font-bold m-10">Halo, Ayo lalukan latihan kognitif secara berkala.</h3>
      </div>
      <div>
        <div className="border py-6 rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <MdOutlinePeopleAlt className="text-gray-900 size-10 w-10" />
          <h3 className="m-3 text-xl font-bold">Latihan Konsentrasi</h3>
        </div>
        <div className="border py-6 rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <PiBrain className="text-gray-900 size-10 w-10" />
          <h3 className="m-3 text-xl font-bold">Latihan Mengingat</h3>
        </div>
        <div className="border py-6 rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <IoMdPeople className="text-gray-900 size-10 w-10" />
          <h3 className="m-3 text-xl font-bold">Latihan Koordinasi</h3>
        </div>
        <div className="border py-6 rounded-lg shadow-xl bg-[#F0D064] flex flex-col items-center justify-center">
          <MdSearch className="text-gray-900 size-10 w-10" />
          <h3 className="m-3 text-xl font-bold">Latihan Mencari Visual</h3>
        </div>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-16 m-5" />
        <HiHome className="size-16 m-5" />
        <BiSolidMessageRoundedDetail className="size-16 m-5" />
      </div>
    </div>
  )
}

export default LatihanKognitif