import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header, Home, Search, ShoppingCart } from "../organism";
import { DetailsProduct } from "../molecules";

export const Pages = ({ signOut }) => {
  return (
    <>
      <Router>
        <Header signOut={signOut} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/shoppingcart" component={ShoppingCart} />
          <Route exact path="/product/:id" component={DetailsProduct} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
