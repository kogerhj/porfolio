import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
// import Projects from "./Components/Projects.jsx";
import Skills from "./Components/Skills.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Home from "./Components/Home.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Navbar/>
      <Home />
      <About/>
      <Contact/>
      {/*<Projects />*/}
      <Skills />
      <Testimonials />
  </React.StrictMode>,
)
