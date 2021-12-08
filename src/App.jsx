import React from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import LogIn from "./pages/LogIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ChangeConfig from "./pages/ChangeConfig";
import CheckHistory from "./pages/CheckHistory";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [userData, setUserData] = React.useState();
  function handleSignUpData(data) {
    setUserData(data);
  }
  function handleLoginData(data) {
    setUserData(data);
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route
          path="/login"
          element={<LogIn handleLoginData={handleLoginData} />}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp handleSignUpData={handleSignUpData} />}
        ></Route>
        <Route
          path="/welcomepage"
          element={<WelcomePage userData={userData} />}
        ></Route>
        <Route path="/changeconfig" element={<ChangeConfig />}></Route>
        <Route path="/checkhistory" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;