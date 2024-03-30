
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthModule from "./pages/AuthModule";
import MainModule from "./pages/MainModule";
import RecruiterAuthModule from "./pages/RecruiterAuthModule";
import RecruiterMainModule from "./pages/RecruiterMainModule";
import RecruiterApplications from "./pages/RecruiterApplications";
// import Chat from "./pages/Chat";

export default function App() {
  return (
    <div className="h-screen font-pops bg-hero w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="auth" element={<AuthModule />} />
          <Route path="" element={<MainModule />} />
          <Route path="recruiter/auth" element={<RecruiterAuthModule />} />
          <Route path="recruiter" element={<RecruiterMainModule />} />
          <Route
            path="recruiter/applications"
            element={<RecruiterApplications />}
          />
          {/* <Route path="/courses" element={< />} /> */}
          {/* <Route path="/chat/:id" element={<Chat />} /> */}
        </Routes>
      </Router>
    </div>
  );
}