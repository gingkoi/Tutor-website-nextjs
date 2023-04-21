import About from "@/components/About";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
    </main>
  );
}
