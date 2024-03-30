import React, { useState } from "react";
import Login from "../components/recruiterAuth/Login";
import Register from "../components/recruiterAuth/Register";
import Navbar from "../components/recruiterAuth/Navbar";

const RecruiterAuthModule = () => {
  const [authType, setAuthType] = useState("login");
  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden flex items-center justify-center">
      <Navbar />
      <div className="h-full w-full pt-20 flex items-center justify-center">
        <div className="h-full w-full">
          {authType === "login" ? (
            <Login setAuthType={setAuthType} />
          ) : (
            <Register setAuthType={setAuthType} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterAuthModule;
