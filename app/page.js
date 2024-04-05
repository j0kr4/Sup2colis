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
      <h1>Bienvenue sur le système de gestion de colis Sup2Colis</h1>
      <Link href="/package">
          <button>Go to Package Page</button>
      </Link>
    </main>
  );
}
