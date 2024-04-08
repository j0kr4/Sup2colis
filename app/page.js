"use client"

import { storage } from "./firebase";
import { useState } from "react";
import { ref, uploadBytes } from 'firebase/storage';
import LoginForm from "./login_form";
import SignUpForm from "./signup_form";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black" style={{textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Bienvenue sur le système de gestion de colis Sup2Colis</h1>
            <br />
            <div className="space-y-6">
              <Link href="/package">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 md:py-4 md:text-lg md:px-10 transform hover:scale-110">
                  Go to Package Page
                </button>
              </Link>
              <br />
              <Link href="/hub">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 md:py-4 md:text-lg md:px-10 transform hover:scale-110">
                  Go to Hub Page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
