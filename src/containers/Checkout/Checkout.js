import React, { Component } from "react";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import withRouter from "../../hoc/withRouter/withRouter";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients });
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
      </div>
    );
  }
}

export default withRouter(Checkout);
