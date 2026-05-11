import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  function logout() {
    return signOut(auth);
  }

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}