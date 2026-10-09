import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Clients from "@/sections/Clients";
import Services from "@/sections/Services";
import Benefits from "@/sections/Benefits";
import FAQ from "@/sections/FAQ";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Services />
      <Benefits />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
