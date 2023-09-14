import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import About from "./Components/About.js";
import Contacts from "./Components/Contacts.js";
import Navbar from "./Components/Navbar.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Testimonials from "./Components/Testimonials.js";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <About/>
    <Contacts/>
    <Navbar/>
    <Projects />
    <Skills />
    <Testimonials />
  </React.StrictMode>,
)
