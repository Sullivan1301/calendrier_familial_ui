"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import React from 'react';

import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SignUp } from "@/components/sign-up/SignUp";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Header />
      {!isLoggedIn && (
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                  <div
                      className="flex flex-col justify-center space-y-4 bg-glass-bg backdrop-blur-[10px] border border-glass-border p-6 rounded-lg">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        Simplifiez le Calendrier de Votre Famille
                      </h1>
                      <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        Calendrier Familial est l'outil ultime pour aider votre famille à rester organisée et connectée.
                        Gérez les événements, les anniversaires, les vacances et plus encore dans un seul endroit
                        central.
                      </p>
                    </div>
                    <SignUp/>
                  </div>
                </div>
              </div>
            </section>
          </main>

      )}
      <Footer/>
    </main>
  );
}
