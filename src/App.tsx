import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Glimpse from './components/Glimpse';
import Highlights from "./components/Highlights";
// import Featured from "./components/Featured";
// import Collections from "./components/Collections";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
        <Hero />
        {/* <Glimpse /> */}
        <Highlights />
        <Services />
        {/* <Featured /> */}
        {/* <Portfolio /> */}
        {/* <Collections /> */}
        <About />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
