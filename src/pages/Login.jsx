import { Link, useNavigate } from 'react-router-dom';
import lamp from '../assets/lamp.svg'
import people from '../assets/people.svg'
import { useRef, useState } from 'react';
import { useAuth } from '../authentication/AuthContext';
import { Toast, ToastToggle } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

function Login() {
  const email = useRef()
  const password = useRef()
  const passwordConfirm = useRef()
  const navigate = useNavigate();
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  async function showError(message) {
    setError(message);
    setTimeout(function () {
      setError("");
    }, 3000);
  }
  async function handleSubmit() {

    console.log(email.current.value, password.current.value, passwordConfirm.current.value);

    //Chek password == passwordconfirm
    if (password.current.value !== passwordConfirm.current.value) {
      return showError("Password do not match")
    }

    try {
      setError("")
      setLoading(true)
      await login(email.current.value, password.current.value, passwordConfirm.current.value)
      //navigate('/syarat')
    } catch (e) {
      showError(e.message)
      console.log(e.message, email.current.value, password.current.value, passwordConfirm.current.value)
    }
    setLoading(false)
  }

  return (
    <div className=" h-screen bg-[#F0D064] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <img className="mt-5 w-[125px]" src={lamp} alt="" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Selamat Datang</h2>
        <h2 className="text-2xl md:text-4xl font-bold mt-1">Masuk :</h2>
        <input className="w-[300px] p-2 mt-4 rounded-md" placeholder="Email" type="email" ref={email} />
        <input className="w-[300px] p-2 mt-2 rounded-md" placeholder="Password" type="password" ref={password} />
        <input className="w-[300px] p-2 mt-2 rounded-md" placeholder="Password Confrim" type="password" ref={passwordConfirm} />
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
      {error !== "" &&
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">{error}</div>
          <ToastToggle />
        </Toast>
      }
    </div>
  )
}

export default Login