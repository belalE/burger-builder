import React, { Component } from "react";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route, Routes } from "react-router-dom";
import withRouter from "../../hoc/withRouter/withRouter";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCanceledHandler = () => {
    this.props.navigate(-1);
  };

  checkoutContinuedHandler = () => {
    this.props.navigate("/checkout/contact-data", { replace: true });
  };

  render() {
    return (
      <div>
        <CheckOutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Routes>
          <Route
            path="/contact-data"
            element={
              <ContactData
                {...this.props}
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}

export default withRouter(Checkout);
