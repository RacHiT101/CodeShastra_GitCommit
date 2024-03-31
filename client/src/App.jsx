/* eslint-disable react/no-unknown-property */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthModule from "./pages/AuthModule";
import MainModule from "./pages/MainModule";
import RecruiterAuthModule from "./pages/RecruiterAuthModule";
import RecruiterPage from "./pages/RecruiterPage";
import RecruiterMainModule from "./pages/RecruiterMainModule";
import RecruiterApplications from "./pages/RecruiterApplications";
import { useEffect, useState } from "react";
import axios from "axios";
// import Chat from "./pages/Chat";

export default function App() {
  const [translatedText, setTranslatedText] = useState("");

  const GoogleTranslate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("from", "auto");
    encodedParams.set("to", "hi");
    encodedParams.set("text", "hello");

    const options = {
      method: "POST",
      url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "85a8296f9dmsh17ba95c1ee02951p12b8e0jsn65bf0df8edba",
        "X-RapidAPI-Host": "google-translate113.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // GoogleTranslate();
  }, []);

  return (
    <div className="h-screen font-pops bg-hero w-screen overflow-hidden">
      <div id="google_translate_element" class="fixed bottom-5 left-5 z-50 bg-blue-500 p-4 rounded-lg shadow-md">
      </div>
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
          <Route path="/:id" element={<RecruiterPage />} />
        </Routes>
      </Router>
    </div>
  );
}
