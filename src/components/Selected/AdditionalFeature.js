import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../../store/actions";

const AdditionalFeature = props => {
  const { feature, addFeature } = props;
  console.log(feature);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => {
          addFeature(feature);
        }}
      >
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: feature => {
      dispatch(addFeature(feature));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
