import About from "@/components/About";
import Courses from "@/components/Courses";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonial />
      <WhyUs />
    </main>
  );
}
