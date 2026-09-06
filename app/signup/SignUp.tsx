"use client"
import { useState } from "react"
import { createClient } from "@/utils/lib/supabase/client"
import { useRouter } from "next/navigation"
import Image from "next/image";

export default function SignUpForm() {
  const router = useRouter();
  const supabase = createClient();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage('Check your email to confirm your account.');
      // const timer = setTimeout(() => {
      // }, 1000)
      router.push("/login")
      // clearTimeout(timer)
      router.refresh();
    }

    setLoading(false);
  };
  return (
    <main className="pt-10vh px-3.5 w-full portrait:max-w-[100vh] min-h-lvh flex items-center justify-center bg-linear-to-b from-white to-zinc-100 gap-0.5 overflow-x-hidden">
      <div className="mx-auto pt-[4vh] px-4 w-full max-w-[30%] portrait:max-w-[100vh] h-lvh portrait:h-fit flex flex-col items-center justify-between gap-6">
        <a
          href="/"
          className="mr-auto h-[10vh] max-w-20vw aspect-square flex"
        >
          <Image
            className="w-full h-full aspect-square object-contain"
            src="/prsvlogo.png"
            alt="prsv logo"
            width={500}
            height={500}
            priority
          />
        </a>
        <form onSubmit={handleSubmit}
         className="my-auto w-full flex flex-col gap-3 text-base font-medium">
          <h1 className="w-full text-4xl font-semibold tracking-tight text-black">
            Create New Account
          </h1>
          <div className="w-full flex flex-col text-base font-medium">
            <label
              className="py-2 w-full text-lg font-bold text-[#777777]"
            >
              Username
            </label>
            <input 
              type="username" name="username" id="username" value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-2 w-full text-lg text-[#3f3f3f] border border-solid border-black rounded-lg"
              placeholder="Write your username"
              required
            />
          </div>
          <div className="w-full flex flex-col text-base font-medium">
            <label
              className="py-2 w-full text-lg font-bold text-[#777777]"
            >
              Email
            </label>
            <input 
              type="email" name="email" id="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 w-full text-lg text-[#3f3f3f] border border-solid border-black rounded-lg"
              placeholder="Use valid email to send confirmation"
              required
            />
          </div>
          <div className="w-full flex flex-col text-base font-medium">
            <label
              className="py-2 w-full text-lg font-bold text-[#777777]"
            >
              Password
            </label>
            <input 
              type="password" name="password" id="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 w-full text-lg text-[#3f3f3f] border border-solid border-black rounded-lg"
              placeholder="Enter New..."
              required
            />
          </div>
          <div className="w-full flex justify-between text-base font-medium">
            <a
              className="py-2 text-gray-500 underline decoration-gray-500 transition-colors hover:text-black hover:decoration-black"
              href="/login">
              Already Have Account?
            </a>
            <button
              className="px-6 py-2 text-center text-black font-bold border border-solid border-black rounded-lg transition-colors hover:text-white hover:bg-[#1a1a1a]"
              type="submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </div>
          {message && <p className="p-2 w-full text-lg text-purple-500 font-semibold">{message}</p>}
        </form>
      </div>
      <div className="my-auto px-4 w-full max-w-[65%] portrait:max-w-[100vh] h-[95vh] portrait:h-fit flex items-center justify-between gap-6 bg-cyan-200 border border-solid rounded-2xl">
        <Image
          className="w-full h-full object-cover"
          src="/prsvlogo.png"
          alt="prsv logo"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </main>
  );
}