import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from '../components/Projects';
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar/> 
      <About/>
      <Projects/>
      <Skills/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
