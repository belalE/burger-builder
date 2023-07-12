import React, { Component } from "react";

import CheckOutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route, Routes, Navigate } from "react-router-dom";
import withRouter from "../../hoc/withRouter/withRouter";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
  checkoutCanceledHandler = () => {
    this.props.navigate(-1);
  };

  checkoutContinuedHandler = () => {
    this.props.navigate("/checkout/contact-data", { replace: true });
  };

  render() {
    let summary = <Navigate to="/" replace={true} />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Navigate to="/" replace={true} />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
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
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(withRouter(Checkout));
