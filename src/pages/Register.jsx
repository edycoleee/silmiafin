import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../authentication/AuthContext";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

function Register() {
  const nama = useRef()
  const email = useRef()
  const password = useRef()
  const passwordConfirm = useRef()
  const tanggalLahir = useRef()
  const { signup } = useAuth()
  const [centang, setCentang] = useState(false);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  async function showError(message) {
    setError(message);
    setTimeout(function () {
      setError("");
    }, 3000);
  }
  const handleCheckboxChange = () => {
    setCentang(!centang);
  };
  async function handleSubmit() {
    console.log("nama :", nama.current.value, "email :", email.current.value, "password :", password.current.value, "tanggal :", tanggalLahir.current.value)
    //1a. Cek password = password confirm
    if (password.current.value !== passwordConfirm.current.value) {
      return showError("Password do not match")
    }

    //1b. Cek isChecked = false 
    if (centang == false) {
      return showError("Baca Syarat Ketentuan")
    }

    //2. Perintah signup >> AuthContext
    try {
      setError("")
      setLoading(true)
      await signup(email.current.value, password.current.value)
      navigate('/menu')
    } catch (e) {
      showError(e.message)
      console.log(e.message, email.current.value, password.current.value);
    }
    setLoading(false)
  }

  return (
    <div className="h-full bg-[#F0D064] flex flex-col items-center">
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
      <Accordion collapseAll className="m-5">
        <AccordionPanel>
          <AccordionTitle className="bg-[#ececec]">Syarat & ketentuan</AccordionTitle>
          <AccordionContent className="bg-white">
            <div className="h-full flex flex-col items-center">
              <div>
                <div className="max-w-[1240px] mx-auto rounded-lg bg-[#e7e7e7]">
                  <ul className="m-5 py-5">
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
                  <input type="checkbox" className="mr-2 size-5" checked={centang}
                    onChange={handleCheckboxChange} />
                  <label>Saya telah membaca dan atas semua point dalam Syarat dan Ketentuan ini.</label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <button type="submit" onClick={() => handleSubmit()} className="w-[225px] py-2 bg-[#202020] hover:bg-[#272727] rounded-lg text-white">Lanjutkan</button>
      <p style={{ color: "white", backgroundColor: "red", paddingLeft: "10px" }} className="m-5">{error}</p>
    </div>
  )
}

export default Register