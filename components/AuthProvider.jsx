"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function AuthProvider({ children }) {
  const { setIsAuth, setUser } = useAuthStore();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged", user);
      if (user) {
        setUser(user);
        setIsAuth(true);
      } else {
        setUser(null);
        setIsAuth(false);
      }
    });
  }, []);
  return children;
}
