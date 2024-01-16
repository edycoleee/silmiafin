import info from '../assets/info.svg'
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { HiHome } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";

function TentangKami() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div className="m-[100px] flex flex-col items-center justify-center">
        <img className="w-[350px]" src={info} alt="" />
        <h3 className="text-6xl font-bold m-5">Tentang Kami</h3>
        <h3 className="text-3xl mr-1 ml-1">ABIYASA merupakan sebuah aplikasi guna meningkatkan kognitif lansia yang di gagas oleh Mahasiswa Program Magister Keperawatan Universitas Indonesia Peminatan Keperawatan Gerontik 2023 yang bekerjasama dengan Poliklinik Geriatik X. ABIYASA merupakan kakek dari pandawa, dalam cerita wayang. ABIYASA memiliki sifat dan perwaakan, pandai, sangat cerdas, arif bijaksana alim, soleh, berwibawa, sehat dan mandiri. Di masa tua nya Abiyasa masih sangat aktif dan produktif, sebagai perlambangan Succesfull Aging. Salam sehat dari kami bagi seluruh Lansia Hebat ABIYASA.</h3>
      </div>
      <div className="mt-[608px] w-full bg-[#F0D064] flex items-center justify-around">
        <FaUserDoctor className="size-16 m-5" />
        <HiHome className="size-16 m-5" />
        <BiSolidMessageRoundedDetail className="size-16 m-5" />
      </div>
    </div>
  )
}

export default TentangKami