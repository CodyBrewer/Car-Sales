import React from "react";
import { connect } from "react-redux";
import Car from "./Car";

const Cars = props => {
  const { cars } = props;
  return (
    <>
      {cars.map(car => (
        <Car car={car} />
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.features.cars
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
