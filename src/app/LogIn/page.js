import Image from "next/image";
import React from "react";

export default function logIn() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mt-5">
        <Image alt="logo" width={250} height={100} src="/loginAmazon.png" />
      </div>
      <div className=" w-1/4 flex-1 mb-3 rounded-lg outline p-8">
        <p className="text-3xl">Sign in</p>
        <div className="mt-5">
          <form className="flex flex-col">
            <label className="text-xs font-bold mb-1">
              Email or mobile phone number
            </label>
            <input
              placeholder=""
              type="text"
              className="h-9 rounded-md outline p-3"
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
            <button className="w-full h-8 rounded-lg mt-8 outline">
              Create your Amazon acoount
            </button>
          </form>
        </div>
      </div>
      <div className="bg-blue-100 w-full flex-1">Footer</div>
    </div>
  );
}
