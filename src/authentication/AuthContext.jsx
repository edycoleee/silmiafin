// src/authentication/AuthContext.jsx
import React, { useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut as authSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";


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