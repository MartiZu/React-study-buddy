import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import UserPage from "./pages/UserPage.tsx";
import Footer from "./Components/Footer.tsx";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
