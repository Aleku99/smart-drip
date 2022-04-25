import React from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import LogIn from './pages/LogIn'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import ChangeConfig from './pages/ChangeConfig'
import CheckHistory from './pages/CheckHistory'
import NotFound from './pages/NotFound.jsx'

function App() {
  const [userData, setUserData] = React.useState(
    JSON.parse(sessionStorage.getItem('userData'))
  )
  function handleSignUpData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
    setUserData(data)
  }
  function handleLoginData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
    setUserData(data)
  }
  if (!userData) {
    return (
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<LogIn handleLoginData={handleLoginData} />}
          ></Route>
          <Route
            path="/login"
            element={<LogIn handleLoginData={handleLoginData} />}
          ></Route>
          <Route
            path="/signup"
            element={<SignUp handleSignUpData={handleSignUpData} />}
          ></Route>
          <Route
            path="*"
            element={
              <NotFound text="Ooooops, page you're searching for is not found" />
            }
          ></Route>
        </Routes>
      </div>
    )
  }

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<WelcomePage userData={userData} />}
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
        <Route path="/checkhistory" element={<CheckHistory />}></Route>
        <Route
          path="*"
          element={
            <NotFound text="Ooooops, page you're searching for is not found" />
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
