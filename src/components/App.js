import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import SurveyPage from "./views/SurveyPage/SurveyPage.js"
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import Wine1 from './views/Wine1/Wine1';
import Wine2 from './views/Wine2/Wine2';
import Wine3 from './views/Wine3/Wine3';
import Wine4 from './views/Wine4/Wine4';
import Map1 from './views/Map1/Map1';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/survey" component={Auth(SurveyPage, null)} />
          <Route exact path="/map" component={Auth(Map1, null)} />
          <Route exact path="/wine1" component={Auth(Wine1, null)} />
          <Route exact path="/wine2" component={Auth(Wine2, null)} />
          <Route exact path="/wine3" component={Auth(Wine3, null)} />
          <Route exact path="/wine4" component={Auth(Wine4, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
