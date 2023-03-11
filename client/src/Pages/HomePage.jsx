import React from "react"
import Main from "./Main"
import Navbar from "./Navbar"
// import Login from "./Login"
// import SignUp from "./SignUp"
// import {Route, Routes} from "react-router-dom"


export const HomePage = () => {
  return (
    <>
      {/* <Login />
    <SignUp /> */}

      {/* <Routes>
        <Route
          exact
          path="/"
          element={ */}
            <div className="overflow-hidden bg-primary font-Roboto">
              <div className="fixed w-full z-50">
              <Navbar />
              </div>
              <Main />       
            </div>
          {/* }
        /> */}
        {/* <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} /> */}
      {/* </Routes> */}
    </>
  )
}
