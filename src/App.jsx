import "./App.css";

//imports do route
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

// components
import Navbar from "./componets/Nabvar/Navbar";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <br />
          <br />
          <br />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>

            {/** NOT FOUND */}
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
