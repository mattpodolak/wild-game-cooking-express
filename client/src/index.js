import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

import {AppProvider} from '@shopify/polaris';

import "assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.jsx";
import AboutPage from "views/AboutPage/AboutPage.jsx";
import ContactPage from "views/ContactPage/ContactPage.jsx";

var hist = createBrowserHistory();

//initialize GA
const trackingId = "UA-171074052-1";
ReactGA.initialize(trackingId);

// Initialize google analytics page view tracking
hist.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(
  <AppProvider>
    <Router history={hist}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById("root")
);
