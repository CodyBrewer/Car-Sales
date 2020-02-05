import React from "react";
import { connect } from "react-redux";

const Total = props => {
  const { price, additionalPrice } = props;

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    price: state.features.car.price,
    additionalPrice: state.features.additionalPrice
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Total);
