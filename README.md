### Firebase Setting=============================

[LinkFirebase](https://console.firebase.google.com/project/silmiafin1/settings/general/web:ZWE1MjZiYTgtOWY1My00YWI0LTgyMmMtYjFlMDkwYTdhZDVl)

Install di Terminal

```js
npm install firebase
```

Copy Data dari Firebase

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvyWjXtxXYYsUDq0W12kxKCC1eGGVQDMU",
  authDomain: "silmiafin1.firebaseapp.com",
  projectId: "silmiafin1",
  storageBucket: "silmiafin1.appspot.com",
  messagingSenderId: "343144574718",
  appId: "1:343144574718:web:80cf2d2526bce5625b7faf",
  measurementId: "G-EBXJBV9F5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

- Authentication

Pilih : Email/Password > Enable > Save

- Firestore Database > Cloud Firestore > Create Database
- Location > asia-southeast2(Jakarta) > Next > Selesai

- Hosting > GetStarted > Next > silmiafin > Finish

Install di Terminal

```js
npm install -g firebase-tools
firebase login
firebase init
```

Lakukan setelah firebase init

Now you will enter the firebase tools shell and will be asked a few questions :

Are you ready to proceed ? press ‘y’ (Yes)
Which Firebase features do you want to set up for this directory? (From the options come to the option “Hosting: Configure files for Firebase Hosting”. Now press ‘space bar’. You will see the option is marked with a star mark (\*). Now press ‘Enter’.
Now you may be asked for set up Github Action deploys, complete them.
Project Setup : You have to choose the project of your firebase. Choose your project.
Hosting Setup : (Here is one important part)
You will be asked to set your public directory? It may be suggesting “public” but don’t select it. As you are using Vite, you have to write “dist” (this will be created after building our project, which consists another index.html)

Then comes the following set of questions,

Configure as a single-page app (rewrite all urls to /index.html)? (Yes)
Set up automatic builds and deploys with GitHub? (No)
Optional, if you have already done npm run build then you must already have the index.html file then you will be asked : File dist/index.html already exists. Overwrite? (Yes)

Untuk deploy ke hosting > ONLINE
Lakukan perintah di Terminal

```js
npm run build
firebase deploy --only hosting
```

### Github Setting====================================================

[Link Github](https://github.com/new)

New Repository > edycoleee/silmiafin > Public > Create repository
COPY semua Perintah

```js
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/edycoleee/silmiafin.git
git push -u origin main
//dst
```

### AUTHENTICATION=================================================

UNTUK MENYIMPAN DATA DI FIREBASE WAJIB MENGGUNAKAN LOGIN MAKA KITA BUAT FITUR AUTH(AUTHENTICATION)

1. Install dependency atau library

```js
   npm install firebase
```

2. Buat folder dan file yang berisi configurasi firebase

```js
//src/firebase/firebase.jsx
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvyWjXtxXYYsUDq0W12kxKCC1eGGVQDMU",
  authDomain: "silmiafin1.firebaseapp.com",
  projectId: "silmiafin1",
  storageBucket: "silmiafin1.appspot.com",
  messagingSenderId: "343144574718",
  appId: "1:343144574718:web:80cf2d2526bce5625b7faf",
  measurementId: "G-EBXJBV9F5Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
export { db };
```

3. Context auth

```js
//src/authentication/AuthContext.jsx
import React, { useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut as authSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return authSignOut(auth);
  }

  const clear = () => {
    setCurrentUser(null);
    setLoading(false);
  };

  const authStateChanged = async (user) => {
    setLoading(true);
    if (!user) {
      clear();
      return;
    }
    setCurrentUser({
      uid: user.uid,
      email: user.email,
    });
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
```

4. Private Route >> Auth

```js
//src/authentication/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  //console.log(currentUser);
  return currentUser?.email ? <Outlet /> : <Navigate to="/" />;
}
```

5. Register Page

```js
//src/authentication/Signup.jsx
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  const { signup } = useAuth();

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log(emailRef.current.value, passwordRef.current.value, passwordConfirmRef.current.value);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError("Passwords do not match");
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (e) {
      console.log(e.message, emailRef.current.value, passwordRef.current.value);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>SIGNUP :</legend>
          <label htmlFor="email" className="label-text">
            Email :
          </label>
          <input
            type="text"
            id="email"
            placeholder="Isi email"
            ref={emailRef}
            required
          />
          <label htmlFor="password" className="label-text">
            Password :
          </label>
          <input
            type="password"
            id="password"
            placeholder="Isi password"
            ref={passwordRef}
            required
          />
          <label htmlFor="password-confirm" className="label-text">
            Password Confirmation :
          </label>
          <input
            type="password"
            id="password-confirm"
            placeholder="Isi password"
            ref={passwordConfirmRef}
            required
          />
          <button disabled={loading} type="submit" className="label-text">
            Sign Up
          </button>
          <p></p>
          Already have an account? <Link to="/signin">Sign In</Link>
          <Link to="/" className="label-text">
            LANDING PAGE
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
```

6. Register Page dengan pesan ERROR

```js
//src/authentication/Signup.jsx
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function showError(message) {
    setError(message);
    setTimeout(function () {
      setError("");
    }, 3000);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log(emailRef.current.value, passwordRef.current.value, passwordConfirmRef.current.value);

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return showError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (e) {
      showError(e.message);
      //console.log(e.message, emailRef.current.value, passwordRef.current.value);
    }
    setLoading(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>SIGNUP :</legend>
          <label htmlFor="email" className="label-text">
            Email :
          </label>
          <input
            type="text"
            id="email"
            placeholder="Isi email"
            ref={emailRef}
            required
          />
          <label htmlFor="password" className="label-text">
            Password :
          </label>
          <input
            type="password"
            id="password"
            placeholder="Isi password"
            ref={passwordRef}
            required
          />
          <label htmlFor="password-confirm" className="label-text">
            Password Confirmation :
          </label>
          <input
            type="password"
            id="password-confirm"
            placeholder="Isi password"
            ref={passwordConfirmRef}
            required
          />
          <button disabled={loading} type="submit" className="label-text">
            Sign Up
          </button>
          <p></p>
          Already have an account? <Link to="/signin">Sign In</Link>
          <Link to="/" className="label-text">
            LANDING PAGE
          </Link>
          <p
            style={{
              color: "white",
              backgroundColor: "red",
              paddingLeft: "10px",
            }}
          >
            {error}
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;
```

7. Login Page

```js
//src/pages/authentication/Signin.jsx
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function showError(message) {
    setError(message);
    setTimeout(function () {
      setError("");
    }, 3000);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //console.log(emailRef.current.value, passwordRef.current.value);

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch (e) {
      showError(e.message);
      //console.log(e.message, emailRef.current.value, passwordRef.current.value);
    }
    setLoading(false);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>SIGNIN :</legend>
          <label htmlFor="email" className="label-text">
            Email :
          </label>
          <input
            type="text"
            placeholder="Isi email"
            id="email"
            ref={emailRef}
            required
          />
          <label htmlFor="password" className="label-text">
            Password :
          </label>
          <input
            type="password"
            placeholder="Isi password"
            ref={passwordRef}
            id="password"
            required
          />
          <button className="label-text" disabled={loading} type="submit">
            Sign In
          </button>
          <p></p>
          <Link to="/forgot-password">Forgot Password?</Link>
          <br></br>
          Need an account? <Link to="/signup">Sign Up</Link>
          <Link className="label-text" to="/">
            LANDING PAGE
          </Link>
          <br></br>
          <p
            style={{
              color: "white",
              backgroundColor: "red",
              paddingLeft: "10px",
            }}
          >
            {error}
          </p>
        </fieldset>
      </form>
    </div>
  );
}

export default Signin;
```

8. Mengatur Private Route pada App.jsx

```js
//src/App.jsx
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import IndexBiodata from "./pages/biodata";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./pages/authentication/AuthContext";
import PrivateRoute from "./pages/authentication/PrivateRoute";

function App() {
  return (
    <>
      <h2>SATSET REACT FIREBASE</h2>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/menu" element={<Menu />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/biodata" element={<IndexBiodata />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
```

9. Menu Page

```js
//src/pages/DashboardPage.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./authentication/AuthContext";

function DashboardPage() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  async function handleLogout() {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div>
      <h3>Dashboard Page</h3>
      <p></p>
      <h4>User : {currentUser.email}</h4>
      <p></p>
      <h4>UID : {currentUser.uid}</h4>
      <p></p>
      <Link to="/pasien">Data Pasien</Link>
      <p></p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default DashboardPage;
```

### CRUD Lengkapi Biodata

Folder Biodata

- index.jsx
- Context.jsx
- Header.jsx
- Create.jsx
- Edit.jsx
- Display.jsx
- Message.jsx

1. Membuat Context

```js
//src/pages/biodata/Context.jsx
import { createContext, useContext } from "react";

//a. nama context
const BiodataContext = createContext();

//b. use context
export function useBiodata() {
  return useContext(BiodataContext);
}

//c. export provider
export const BiodataProvider = ({ children }) => {
  //1. Kirim String
  const testval = "Coba Test Val Context Biodata";

  //2.... CRUD

  return (
    <BiodataContext.Provider
      value={{
        testval,
      }}
    >
      {children}
    </BiodataContext.Provider>
  );
};
```

2. Menggunakan Context

```js
//src/App.jsx
<Route element={<PrivateRoute />}>
  <Route
    path="/biodata"
    element={
      <BiodataProvider>
        <IndexBiodata />
      </BiodataProvider>
    }
  />
</Route>
```

3. MENGGUNAKAN CONTEXT => TEST KIRIM STRING

```js
//src/pages/dtpraktisi/index.jsx
import React from "react";
import { usePraktisi } from "./Context";

function IndexPraktisi() {
  //Test variabel dari context
  const { testval } = usePraktisi();
  return <div>IndexPraktisi - {testval}</div>;
}

export default IndexPraktisi;
```

4. Membuat halaman Header

```js
//src/pages/dtpractisi/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <fieldset>
      <legend>DATA LOCATION :</legend>
      <Link to="/landing">Landing</Link>
      <button
        onClick={() => {
          console.log("TAMBAH DATA");
        }}
        className="label-text"
      >
        TAMBAH DATA
      </button>
    </fieldset>
  );
}

export default Header;
```

5. CONTEXT
