
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthModule from "./pages/AuthModule";
import MainModule from "./pages/MainModule";
import RecruiterAuthModule from "./pages/RecruiterAuthModule";
// import Chat from "./pages/Chat";

export default function App() {
  return (
    <div className="h-screen font-pops bg-hero w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="auth" element={<AuthModule />} />
          <Route path="recruiter/auth" element={<RecruiterAuthModule />} />
          <Route path="" element={<MainModule />} />
          {/* <Route path="/courses" element={< />} /> */}
          {/* <Route path="/chat/:id" element={<Chat />} /> */}
        </Routes>
      </Router>
    </div>
  );
}