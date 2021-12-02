import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import LogIn from "./pages/LogIn";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ChangeConfig from "./pages/ChangeConfig";
import CheckHistory from "./pages/CheckHistory";
import NoMatch from "react-router-nomatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/welcomepage" element={<WelcomePage />}></Route>
        <Route path="/changeconfig" element={<ChangeConfig />}></Route>
        <Route path="/checkhistory" element={<CheckHistory />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
