import React from "react";
import { connect } from "react-redux";
import Car from "./Car";

const Cars = props => {
  const { cars } = props;
  return (
    <div className="boxes">
      {cars.map(car => (
        <Car car={car} key={car.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.features.cars
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
