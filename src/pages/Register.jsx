import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../authentication/AuthContext";

function Register() {
  const nama = useRef()
  const email = useRef()
  const password = useRef()
  const passwordConfirm = useRef()
  const tanggalLahir = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const Lanjutkan = () => {
    navigate("/syarat")
  }
  async function showError(message) {
    setError(message);
    setTimeout(function () {
      setError("");
    }, 3000);
  }
  async function handleSubmit() {
    console.log("nama :", nama.current.value, "email :", email.current.value, "password :", password.current.value, "tanggal :", tanggalLahir.current.value)
    //1. Cek password = password confirm
    if (password.current.value !== passwordConfirm.current.value) {
      return showError("error")
    }

    //2. Perintah signup >> AuthContext
    try {
      setError("")
      setLoading(true)
      await signup(email.current.value, password.current.value)
      //navigate('/syarat')
    } catch (e) {
      showError(e.message)
      console.log(e.message, email.current.value, password.current.value);
    }
    setLoading(false)

  }

  return (
    <div className="h-screen bg-[#F0D064] flex flex-col items-center">
      <h3 className="mt-5 text-4xl font-bold">Buat Akun Baru</h3>
      <div className="m-2 flex items-center justify-center">
        <h3 className="m-1 text-1xl">Sudah punya akun? Masuk</h3>
        <Link to="/login" className="text-1xl text-white">disini</Link>
      </div>
      <div className="mt-[25px] flex flex-col">
        <h3 className="text-1xl font-bold m-1">Nama :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="text" ref={nama} />
        <h3 className="text-1xl font-bold m-1">Email :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="email" ref={email} />
        <h3 className="text-1xl font-bold m-1">Password :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="password" ref={password} />
        <h3 className="text-1xl font-bold m-1">Password Confirm :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="password" ref={passwordConfirm} />
        <h3 className="text-1xl font-bold m-1">Tanggal Lahir :</h3>
        <input className="w-[300px] p-2 m-1 rounded-md" type="date" ref={tanggalLahir} />
      </div>


      <button type="submit" onClick={() => handleSubmit()} className="w-[225px] mt-10 py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Lanjutkan</button>
    </div>
  )
}

export default Register