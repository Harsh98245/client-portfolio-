import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-black" style={{ color: "#E1E0CC" }}>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Footer />
    </main>
  );
}
