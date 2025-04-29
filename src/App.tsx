import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "@pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Home
              </Link>
            </div>
            <ThemeToggleButton />
          </nav>
          <div className="p-8">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
