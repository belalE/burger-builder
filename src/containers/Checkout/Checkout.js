import React, { Component } from "react";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route, Routes } from "react-router-dom";
import withRouter from "../../hoc/withRouter/withRouter";
import { connect } from "react-redux";

class Checkout extends Component {
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
          ingredients={this.props.ings}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Routes>
          <Route path="/contact-data" Component={ContactData} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(withRouter(Checkout));
