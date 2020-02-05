import React from "react";
import { selectCar } from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Car = props => {
  const { car, selectCar } = props;
  const { price, name, image } = car;

  const routeChange = () => {
    let path = "/selected";
    props.history.push(path);
  };

  return (
    <div className="box">
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
      <button
        onClick={() => {
          selectCar(car);
          routeChange();
        }}
      >
        select
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    selectCar: car => {
      dispatch(selectCar(car));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Car));
