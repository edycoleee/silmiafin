function Syarat() {
  return (
    <div className="h-full bg-[#F0D064] flex flex-col items-center">
      <div className="m-10">
        <h3 className=" py-3 text-5xl md:text-5xl font-bold">Syarat & Ketentuan:</h3>
        <div className="max-w-[1240px] mx-auto rounded-lg bg-[#fae191]">
          <ul className="m-10 py-5">
            <li className="text-2xl">Program, aplikasi dan layanan di ABIYASA saat ini disediakan dalam bahasa Indonesia.</li>
            <li className="text-2xl">Ditujukan bagi Warga Negara Indonesia (WNI).</li>
            <li className="text-2xl">Setiap member yang sudah terdaftar dan terverifikasi di ABIYASA disebut sebagai member ABIYASA.</li>
            <li className="text-2xl">Setiap member yang sudah bergabung di ABIYASA secara otomatis menyetujui Syarat dan Ketentuan serta Kebijakan yang berlaku.</li>
            <li className="text-2xl">ABIYASA melindungi data pribadi member (seperti source code dari skrip yang tidak ingin dibagikan kepada orang lain, database, atau data-data di direktori home member yang tidak ingin dapat dilihat oleh user lain).</li>
            <li className="text-2xl">Perjanjian ini telah dibaca oleh member sebelum layanan diberikan dan telah disetujui dengan mencentang kotak tanda member telah membaca dan setuju atas semua point dalam Syarat dan Ketentuan ini.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2 size-5" />
          <label className="text-1xl">Saya telah membaca dan atas semua point dalam Syarat dan Ketentuan ini.</label>
        </div>
        <button className="w-[250px] m-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Daftar</button>
      </div>
    </div>
  )
}

export default Syarat