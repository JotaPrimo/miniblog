import "./App.css";

//imports do route
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";



function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={ <Home />}></Route>
            <Route path="/about" element={ <About /> }></Route>

            {/** NOT FOUND */}
            <Route path="*" element={<NotFound /> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
