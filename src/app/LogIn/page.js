'use client'
import React from "react";
import Image from "next/image";
import data from "../../../data/data.json";
import { useRouter } from "next/navigation";

export default function LogIn() {
  const users = data.Users;
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState("");

const router = useRouter();

  function logIn(event) {
    event.preventDefault(); 

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Login successful", router);
      router.push("/");

    } else {
      console.log("Invalid credentials");
    }
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mt-5">
        <Image alt="logo" width={250} height={250} src="/loginAmazon.png" />
      </div>
      <div className=" w-1/4 flex-1 mb-3 rounded-lg outline p-8">
        <p className="text-3xl">Sign in</p>
        <div className="mt-5">
          <form className="flex flex-col" onSubmit={logIn}>
            <label className="text-xs font-bold mb-1">
              Email or mobile phone number
            </label>
            <input
              placeholder=""
              type="text"
              className="h-9 rounded-md outline p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label className="mt-2 flex justify-between text-xs font-bold mb-1">
              Password{" "}
              <a href="##" className="text-blue-500">
                Forget Password
              </a>
            </label>
            <input
              placeholder=""
              type="password"
              className="h-9 rounded-md outline p-3 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="w-full bg-yellow-400 mt-8 rounded-lg h-9">
              Sign in
            </button>
            <p className="mt-4 text-xs">
              By continuing, you agree to Amazon s Conditions of Use and Privacy
              Notice.
            </p>
            <div className="mt-4">
              <input type="checkbox" />
              <span className="ml-3 text-sm">Keep me signed in.</span>
            </div>
            <button type="submit" className="w-full h-8 rounded-lg mt-8 outline">
              Create your Amazon acoount
            </button>
          </form>
        </div>
      </div>
      <div className="bg-blue-100 w-full flex-1">Footer</div>
    </div>
  );
}
