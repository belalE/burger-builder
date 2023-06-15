import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/checkout/*" Component={Checkout} />
            <Route path="/orders" Component={Orders} />
            <Route path="/" exact Component={BurgerBuilder} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
