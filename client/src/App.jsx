
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthModule from "./pages/AuthModule";
import MainModule from "./pages/MainModule";
// import Chat from "./pages/Chat";

export default function App() {
  return (
    <div className="h-screen font-pops bg-hero w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="auth" element={<AuthModule />} />
          <Route path="" element={<MainModule />} />
          {/* <Route path="/chat/:id" element={<Chat />} /> */}
        </Routes>
      </Router>
    </div>
  );
}