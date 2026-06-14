import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Stages from "@/components/Stages";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Portfolio />
        <Stages />
        <Services />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
