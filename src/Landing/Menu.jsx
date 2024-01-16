//import wayang from '../assets/wayang.svg'
import { BsMenuButtonWide } from "react-icons/bs";
import { BsAspectRatio } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";

function Menu() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="m-20 flex flex-col items-center justify-center">
        <h3 className="py-3 text-5xl md:text-5xl font-bold">Selamat Datang Di ABIYASA</h3>
        <h3 className=" text-xl font-bold">ABIYASA membantu untuk mendeteksi kemampuan kognitif anda dan memberikan beberapa program latihan untuk meningkatkan kemampuan kognitif anda.</h3>
      </div>
      <div className="grid md:grid-cols-4gap-1 px-2 text-center">
        <div className="border py-6 rounded-lg shadow-xl bg-black flex flex-col items-center justify-center">
          <BsMenuButtonWide className="text-orange-500 size-10 w-10 " />
          <h3 className="mt-3 text-xl font-bold text-white">Biodata</h3>
        </div>
        <div className="border py-6 rounded-lg shadow-xl bg-black flex flex-col items-center justify-center">
          <BsAspectRatio className="text-orange-500 size-10 w-10 " />
          <h3 className="mt-3 text-xl font-bold text-white">Pengkajian Kognitif</h3>
        </div>
        <div className="border py-6 rounded-lg shadow-xl bg-black flex flex-col items-center justify-center">
          <HiComputerDesktop className="text-orange-500 size-10 w-10 " />
          <h3 className="mt-3 text-xl font-bold text-white">Latihan Kognitif</h3>
        </div>
        <div className="border py-6 rounded-lg shadow-xl bg-black flex flex-col items-center justify-center">
          <BsBook className="text-orange-500 size-10 w-10 " />
          <h3 className="m-3 text-xl font-bold text-white">Pendidikan Kesehatan</h3>
        </div>
        <button className="w-[250px] m-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Keluar</button>
      </div>
      <div className="mt-10 w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-16 m-5" />
        <HiHome className="size-16 m-5" />
        <BiSolidMessageRoundedDetail className="size-16 m-5" />
      </div>
    </div >
  )
}

export default Menu

//https://react-icons.github.io/react-icons/icons/bs/