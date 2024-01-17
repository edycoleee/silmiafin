import { useNavigate } from "react-router-dom";

function Syarat() {
  const navigate = useNavigate();
  const Daftar = () => {
    navigate("/menu");
  }
  return (
    <div className="h-full bg-[#F0D064] flex flex-col items-center">
      <div className="m-10">
        <h3 className="text-3xl md:text-4xl font-bold">Syarat & Ketentuan:</h3>
        <div className="max-w-[1240px] mx-auto rounded-lg bg-[#fae191]">
          <ul className="m-10 py-5">
            <li className="md:text-xl ">1. Program, aplikasi dan layanan di ABIYASA saat ini disediakan dalam bahasa Indonesia.</li>
            <li className="md:text-xl mt-1">2. Ditujukan bagi Warga Negara Indonesia (WNI).</li>
            <li className="md:text-xl mt-1">3. Setiap member yang sudah terdaftar dan terverifikasi di ABIYASA disebut sebagai member ABIYASA.</li>
            <li className="md:text-xl mt-1">4. Setiap member yang sudah bergabung di ABIYASA secara otomatis menyetujui Syarat dan Ketentuan serta Kebijakan yang berlaku.</li>
            <li className="md:text-xl mt-1">5. ABIYASA melindungi data pribadi member (seperti source code dari skrip yang tidak ingin dibagikan kepada orang lain, database, atau data-data di direktori home member yang tidak ingin dapat dilihat oleh user lain).</li>
            <li className="md:text-xl mt-1">6. Perjanjian ini telah dibaca oleh member sebelum layanan diberikan dan telah disetujui dengan mencentang kotak tanda member telah membaca dan setuju atas semua point dalam Syarat dan Ketentuan ini.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center ml-4">
          <input type="checkbox" className="mr-2 size-5" />
          <label>Saya telah membaca dan atas semua point dalam Syarat dan Ketentuan ini.</label>
        </div>
        <button onClick={() => Daftar()} className="w-[250px] m-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Daftar</button>
      </div>
    </div>
  )
}

export default Syarat