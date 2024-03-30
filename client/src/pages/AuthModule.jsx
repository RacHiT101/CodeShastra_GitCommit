import React, { useState } from "react";
import Navbar from "../components/auth/Navbar";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const AuthModule = () => {
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

export default AuthModule;
