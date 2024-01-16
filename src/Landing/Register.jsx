function Register() {
  return (
    <div className="h-screen bg-[#F0D064] flex flex-col items-center">
      <h3 className="mt-5 text-4xl font-bold">Buat Akun Baru</h3>
      <div className="m-2 flex items-center justify-center">
        <h3 className="m-1 text-1xl">Sudah punya akun? Masuk</h3>
        <h3 className="text-1xl text-white">disini</h3>
      </div>
      <div className="mt-[25px] flex flex-col">
        <h3 className="text-1xl font-bold m-1">Nama :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" />
        <h3 className="text-1xl font-bold m-1">Email :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="email" />
        <h3 className="text-1xl font-bold m-1">Password :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="password" />
        <h3 className="text-1xl font-bold m-1">Tanggal Lahir :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="date" />
      </div>
      <button className="w-[225px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Lanjutkan</button>
    </div>
  )
}

export default Register