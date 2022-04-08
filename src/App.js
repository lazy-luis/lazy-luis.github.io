import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import MobilePopper from "./components/MobilePopper";

const App = () => {
  const [mobile_menu, mobile_state] = useState(false);

  const showMenu = () => {
    mobile_state(!mobile_menu);
  };
  return (
    <BrowserRouter>
      <div className="home-container">
        <div className="main-container">
          <MobilePopper menu={mobile_menu} linkClick={showMenu} />
          <Header btnClick={showMenu} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/me" element={<About />} />
              <Route path="/works" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
