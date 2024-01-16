import avachat from '../assets/avachat.svg'
import avaori from '../assets/avaori.svg'
import { FaPaperPlane } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";

function Chat() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full bg-[#e6e6e6] ">
        <h3 className="m-10 text-4xl font-bold">Layanan Konsultasi ABIYASA</h3>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#dddddd] max-w-[100px] rounded-lg mt-10">
        <h3 className="text-2xl m-3">Hari ini</h3>
      </div>
      <div className="m-3">
        <div className="flex m-1">
          <img src={avachat} alt="" className="size-[60px]" />
          <div className="bg-[#e7e7e7] min-w-[1000px] rounded-lg mt-10">
            <h3 className="text-2xl m-2">Halo</h3>
            <p className="text-xl m-1 text-[#666666]">10:45 AM</p>
          </div>
        </div>
        <div className="flex m-1">
          <img src={avaori} alt="" className="size-[60px]" />
          <div className="bg-[#EFD3B9] min-w-[1000px] max-w-[1000px] rounded-lg mt-10">
            <h3 className="text-2xl m-2 text-[#3A1900]">Selamat siang Lansia Hebat ABIYASA. Bersama dengan Ners Eka disini. Ada yang bisa saya bantu?</h3>
            <p className="text-xl m-1 text-[#BA8B69]">10:46 AM</p>
          </div>
        </div>
        <div className="flex m-1">
          <img src={avachat} alt="" className="size-[60px]" />
          <div className="bg-[#e7e7e7] min-w-[1000px] rounded-lg mt-10">
            <h3 className="text-2xl m-2">Ners Eka kenapa ya mata saya dari kemarin berair</h3>
            <p className="text-xl m-1 text-[#666666]">10:49 AM</p>
          </div>
        </div>
        <div className="flex m-1">
          <img src={avaori} alt="" className="size-[60px]" />
          <div className="bg-[#EFD3B9] min-w-[1000px] rounded-lg mt-10">
            <h3 className="text-2xl m-2 text-[#3A1900]">Untuk pemeriksaan lebih lanjut saya sarankan untuk segera ke puskesmas/klinik terdekat.</h3>
            <p className="text-xl m-1 text-[#BA8B69]">10:50 AM</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <input type="text" placeholder="Ketik pesan..." className="w-[300px] p-2 m-1 rounded-md bg-[#C5C0BC] placeholder-[#000000] size-12" />
        <div className="bg-[#C5C0BC] ml-2 rounded-2xl">
          <FaPaperPlane className="m-4" />
        </div>
      </div>
      <div className="mt-[608px] w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-16 m-5" />
        <HiHome className="size-16 m-5" />
        <BiSolidMessageRoundedDetail className="size-16 m-5" />
      </div>
    </div >
  )
}

export default Chat