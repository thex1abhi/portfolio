"use client";
import About from "@/components/About";
import Header from "@/components/Header";
import Mywork from "@/components/Mywork";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header /> 
    <About />
    <Skills /> 
    <Mywork />
    </>
  );
}
