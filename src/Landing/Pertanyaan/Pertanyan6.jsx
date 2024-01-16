import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";

function Pertanyan() {
  return (
    <div className="flex flex-col items-center">
      <div className="m-[50px] flex flex-col items-center justify-center">
        <h3 className="text-5xl font-bold m-10">Pertanyaan 6</h3>
        <h3 className="text-4xl font-bold mt-10">Tanggal berapa anda lahir?</h3>
        <input type="text" placeholder="Tuliskan jawaban anda" className="bg-gray-100 w-[300px] p-2 m-[50px] rounded-md text-xl" />
        <button className="w-[300px] mt-10 py-3 bg-[#202020] hover:bg-[#272727] rounded-lg text-white text-xl">Pertanyan Berikutnya</button>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-16 m-5" />
        <HiHome className="size-16 m-5" />
        <BiSolidMessageRoundedDetail className="size-16 m-5" />
      </div>
    </div>
  )
}

export default Pertanyan