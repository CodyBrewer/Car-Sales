import React from "react";
import { removeFeature } from "../../store/actions";
import { connect } from "react-redux";

const AddedFeature = props => {
  const { feature, removeFeature } = props;

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() => {
          removeFeature(feature);
        }}
      >
        X
      </button>
      <p>{feature.name}</p>
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    removeFeature: feature => {
      dispatch(removeFeature(feature));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
