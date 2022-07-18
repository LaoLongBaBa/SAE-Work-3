import Header from "./components/Header.js"

import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Contact from "./pages/Contact.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>

      <BrowserRouter>

        <Header />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
