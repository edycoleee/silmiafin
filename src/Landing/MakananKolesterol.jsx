import { MdArrowBack } from "react-icons/md";

function MakananKolesterol() {
  return (
    <div className="flex flex-col items-center bg-[#F0D064]">
      <div className="m-[50px] flex flex-col items-center justify-center">
        <h3 className="text-5xl font-bold m-1" >Tips Mengolah Makanan bagi Penderita Kolesterol Tinggi.</h3>
        <h3 className="text-2xl m-1">Oleh: Ns. Dewi, S.Kep</h3>
        <div className="mr-[500px] ml-[500px] mt-5 items-center justify-center bg-[#F5E09B] rounded-lg h-[210px]">
          <h3 className="text-3xl font-bold ml-5 mt-2">Berikut ini merupakan beberapa tips mengolah makanan yang dianjurkan untuk membantu menjaga kadar kolesterol dalam tubuh tetap aman dan terkontrol (Handayani, 2018):</h3>
          <h3 className="text-2xl font-bold ml-5 mt-1">1. Olah bahan makanan dengan cara direbus, kukus maupun di panggang.</h3>
          <h3 className="text-2xl font-bold ml-5 mt-1">2. Pilihkan minyak jagung/zaitun jika diperlukan untuk menumis sayuran.</h3>
          <h3 className="text-2xl font-bold ml-5 mt-1">3. Hindari produk olahan seperti santan kelapa dalam mengolah makanan.</h3>
          <p />
        </div>
        <MdArrowBack className="size-[60px] m-5" />
      </div>
    </div>
  )
}

export default MakananKolesterol