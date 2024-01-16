function LengkapiBiodata() {
  return (
    <div className="h-screen flex flex-col items-center bg-[#F0D064]">
      <div className="m-[50px] flex flex-col items-center justify-center">
        <h3 className="text-5xl font-bold mt-5">Halo, silahkan lengkapi Biodata anda.</h3>
      </div>
      <div className="mt-10 flex flex-col">
        <h3 className="text-1xl font-bold m-1">Nama Lengkap:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
      </div>
      <div className="m-3">
        <input type="checkbox" className="mr-2 size-5" />
        <label className="text-1xl mr-10">Perempuan</label>
        <input type="checkbox" className="mr-2 size-5" />
        <label className="text-1xl">Laki-laki</label>
      </div>
      <div className=" flex flex-col">
        <h3 className="text-1xl font-bold m-1">Alamat:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
        <h3 className="text-1xl font-bold m-1">Nama Panggilan Ibu Anda:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
        <h3 className="text-1xl font-bold m-1">Penyakit yang di derita:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
        <h3 className="text-1xl font-bold m-1">Lama Sakit:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
        <h3 className="text-1xl font-bold m-1">Riwayat Pengobatan:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
        <h3 className="text-1xl font-bold m-1">Perawat Klinik:</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
      </div>
      <div>
        <button className="w-[250px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white mr-10 ">Simpan</button>
        <button className="w-[250px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Batal</button>
      </div>
    </div>
  )
}

export default LengkapiBiodata