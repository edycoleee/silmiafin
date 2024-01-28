import { useNavigate } from "react-router-dom";

function LatihanKonsentrasi() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center bg-[#F0D064]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold mt-7">Latihan Konsentrasi</h3>
        <h3 className="text-2xl m-2 ">Riwayat Latihan</h3>
      </div>
      <div className="container mx-auto m-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 border-b">No</th>
              <th className="py-2 border-b">Tanggal</th>
              <th className="py-2 border-b">Jam</th>
              <th className="py-2 border-b">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-1 border-b">11/02/2023</td>
              <td className="py-2 px-4 border-b">12:32</td>
              <td className="py-2 px-4 border-b">122 menit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-5">
        <button className="w-[250px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white mr-5">Mulai</button>
        <button onClick={() => navigate("/menu/latkog")} className="w-[250px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Batal</button>
      </div>
    </div>
  )
}

export default LatihanKonsentrasi