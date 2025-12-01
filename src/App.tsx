import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Packages from "./components/Packages";
import MessageBoard from "./components/MessageBoard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <About />
      {/*<MessageBoard />*/}
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
