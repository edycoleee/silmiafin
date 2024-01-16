import lamp from '../assets/lamp.svg'
import people from '../assets/people.svg'

function Login() {
  //1. state > Gunakan useRef > Input yang sederhana tdk menggunakan useState

  //2. Ambil function signup dari useAuth

  //3. fungsion Login
  function onSIgnin() {
    console.log("Fungsi SIGNIN")
    // signup(emailRef.current.value, passwordRef.current.value)
  }



  return (
    <div className=" h-screen bg-[#F0D064] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <img className="mt-11 w-[175px]" src={lamp} alt="" />
        <h2 className="py-3 text-5xl md:text-5xl font-bold text-white">Selamat Datang</h2>
        <h2 className="text-4xl font-bold mt-5">Masuk :</h2>
        <input className="w-[300px] p-2 mt-4 rounded-md" placeholder="Email" type="email" />
        <input className="w-[300px] p-2 mt-2 rounded-md" placeholder="Password" type="password" />
        <input className="w-[300px] p-2 mt-2 rounded-md" placeholder="PasswordConfirms" type="password" />
      </div>
      <div className="flex">
        <h3 className="m-3 text-xl">Ingat Email</h3>
        <h3 className="font-bold m-3 text-xl">Lupa Sandi?</h3>
      </div>
      <div className="flex flex-col items-center justify-center m-[50px]">
        <button className="w-[250px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white" onClick={() => onSIgnin()}>Masuk</button>
        <img className="mt-5 w-[200px]" src={people} alt="" />
      </div>
      <div className="flex">
        <h3 className="m-3 text-xl">Tidak Punya Akun?</h3>
        <h3 className="m-3 text-xl text-gray">Buat Akun Baru</h3>
      </div>
    </div>
  )
}

export default Login