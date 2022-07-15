import React from "react";
import About from "./components/About";
import Dev from "./components/Dev";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import Twist from "./components/Twist";

function App() {
  return (
    <div>
      <Navbar />
      <Twist />
      <About />
      <Dev />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
