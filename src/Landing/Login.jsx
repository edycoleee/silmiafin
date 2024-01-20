import { Link, useNavigate } from 'react-router-dom';
import lamp from '../assets/lamp.svg'
import people from '../assets/people.svg'
import { useRef, useState } from 'react';

function Login() {
  const email = useRef()
  const password = useRef()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const Lanjutkan = () => {
    navigate("/syarat")
  }
  async function handleSubmit() {
    console.log("email :", email.current.value, "password :", password.current.value)
  }
  return (
    <div className=" h-screen bg-[#F0D064] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <img className="mt-5 w-[125px]" src={lamp} alt="" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Selamat Datang</h2>
        <h2 className="text-2xl md:text-4xl font-bold mt-1">Masuk :</h2>
        <input className="w-[300px] p-2 mt-4 rounded-md" placeholder="Email" type="email" ref={email} />
        <input className="w-[300px] p-2 mt-2 rounded-md" placeholder="Password" type="password" ref={password} />
      </div>
      <div className="flex">
        <h3 className="m-3">Ingat Email</h3>
        <h3 className="font-bold m-3">Lupa Sandi?</h3>
      </div>
      <div className="flex flex-col items-center justify-center m-[50px]">
        <button onClick={() => handleSubmit()} className="w-[225px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Masuk</button>
        <img className="mt-5 w-[150px]" src={people} alt="" />
      </div>
      <div className="flex">
        <h3 className="m-2">Tidak Punya Akun?</h3>
        <Link to="/register" className="m-2 text-white">Buat Akun Baru</Link>
      </div>
    </div>
  )
}

export default Login