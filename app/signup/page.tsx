import type { Metadata } from "next";
import SignUpForm from "./SignUp"

export const metadata: Metadata = {
  title: "Register",
  description: "create new account portal",
};

export default function Login() {  
  return <SignUpForm />
}
