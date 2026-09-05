import type { Metadata } from "next";
import LoginForm from "./LoginForm"

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your account",
};

export default function Login() {  
  return <LoginForm />
}
