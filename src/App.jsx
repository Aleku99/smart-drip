import React from 'react'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import LogIn from './pages/LogIn'
import { Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import ChangeConfig from './pages/ChangeConfig'
import CheckHistory from './pages/CheckHistory'
import NotFound from './pages/NotFound.jsx'
import { authActions } from './store/index'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth.authenticated)

  function handleSignUpData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
    dispatch(authActions.setTrue())
  }
  function handleLoginData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
    dispatch(authActions.setTrue())
  }
  function setAuthState() {
    if (sessionStorage.getItem('userData')) {
      dispatch(authActions.setTrue())
    } else {
      dispatch(authActions.setFalse())
    }
  }
  useEffect(() => {
    setAuthState()
  })
  if (!auth) {
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
            path="/welcomepage"
            element={
              <NotFound text="You have to be logged in to access this page" />
            }
          ></Route>
          <Route
            path="/changeconfig"
            element={
              <NotFound text="You have to be logged in to access this page" />
            }
          ></Route>
          <Route
            path="/checkhistory"
            element={
              <NotFound text="You have to be logged in to access this page" />
            }
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
        <Route path="/" element={<WelcomePage auth={auth} />}></Route>
        <Route
          path="/welcomepage"
          element={<WelcomePage auth={auth} />}
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
