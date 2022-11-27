import { useState, useLayoutEffect } from "react";
import { CurrentUserContext } from "./../contexts/CurrentUserContext";
import { Route, Switch, Redirect, } from "react-router-dom";

import { userController } from '../controllers/userController';
import { companyController } from '../controllers/companyController';

import Header from "./Header.js";
import Main from "./Main";
import Footer from "./Footer";
import Loader from "./Loader";

import Register from "./Register.js";
import Login from "./Login.js";
import ProtectedRoute from "./ProtectedRoute.js";

import jwtDecode from "jwt-decode";
import Cabinet from "./Cabinet/Cabinet";
import Faq from './Faq';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  function handleSignout() {
    localStorage.clear();
    setCurrentUser({});
    setIsAuthorized(false);
  }
  
  function onLogin(userData) {
    setCurrentUser(userData);
    setIsAuthorized(true);
  }

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) {
      let user;
      try {
        user = jwtDecode(localStorage.getItem("token"));
        switch (user.type) {
          case 'company':
            companyController
              .getCompanyInfo()
              .then(({ company }) => {
                setCurrentUser({ ...company })
                setIsAuthorized(true);
              })
              .catch((e) => {
                setIsLoading(false);
              });
            break;
          case 'user':
            userController
              .getUserInfo()
              .then(({ user }) => {
                setCurrentUser({ ...user })
                setIsAuthorized(true);
              })
              .catch((e) => {
                setIsLoading(false);
              });
            break;
          default:
            break;
        }
      } catch (e) {
        console.log(e);
      }

    } else {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        backgroundColor: "#1D4776"
      }}
    >
      <Loader />
    </div>
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <Header onSignout={handleSignout} />
      <Switch>
        <Route path="/sign-up">
          {!isAuthorized ? (
            <Register />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/sign-in">
          {!isAuthorized ? (
            <Login onLogin={onLogin} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>  
        <ProtectedRoute loggedIn={isAuthorized} path='/cabinet'>
          <Cabinet />
        </ProtectedRoute>
        <Route exact path="/">
          <Main/>
        </Route>  
        <Route path="*">
          <Redirect to="/" />
        </Route>
        </Switch>
        <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
