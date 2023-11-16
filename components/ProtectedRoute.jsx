"use client";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { isAuth } = useAuthStore();
  const router = useRouter();

  if (!isAuth) {
    router.push("/");
    return null;
  }
  return children;
}
