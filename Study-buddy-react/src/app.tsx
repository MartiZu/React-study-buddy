import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import UserPage from "./pages/UserPage.tsx";


export function App() {
  return (
    <BrowserRouter>

      <div className="container main">
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}
