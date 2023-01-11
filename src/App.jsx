import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path="about" element={<About/>} />
        <Route path="skills" element={<Skills/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={ <Error/> } />
      </Route>
    </Routes>
  </Router>
  )
}

export default App;
