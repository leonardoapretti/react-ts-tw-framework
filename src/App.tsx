import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-green-600 hover:underline">
          Sobre
        </Link>
      </nav>
      <div className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
