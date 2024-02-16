
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import Project from '../components/Project';
import Support from '../components/Support';
import Footer from '../components/Footer';




export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-10 md:px-24 pt-24 ">
        <Hero />
        <About />
        <Service />
        <Project />
        <Support />
      
      </main>
      <Footer />
    </>
  )
}
