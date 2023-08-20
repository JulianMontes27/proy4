import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to={"/"}>#VANLIFE</Link>
        <nav>
          <Link to={"/about"}>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//anqor tags refresh pages, thats why we need to use Link components, so that state doesnt reset
