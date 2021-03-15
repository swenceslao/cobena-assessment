import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return(
    <div className="App">
      <Router>
        <header>
          <Navbar/>
        </header>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/products" render={() => <ProductPage />} />
          <Route exact path="/contact" render={() => <ContactPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;