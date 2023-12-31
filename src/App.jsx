import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

import "../server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to={"/"}>
          #VANLIFE
        </Link>
        <nav>
          <Link to={"/about"}>About</Link>
          <Link to={"/vans"}>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//anqor tags refresh pages, thats why we need to use Link components, so that state doesnt reset
