import About from "@/components/About";
import BottomBanner from "@/components/BottomBanner";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Testimonial />
      <WhyUs />
      <BottomBanner />
      <Footer />
    </main>
  );
}
