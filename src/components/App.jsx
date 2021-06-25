import React, { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
import Blogs from "./Blogs";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles.css";
export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
