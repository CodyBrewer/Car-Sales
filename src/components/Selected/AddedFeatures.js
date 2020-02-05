import React from "react";

import AddedFeature from "./AddedFeature";
import { connect } from "react-redux";

const AddedFeatures = props => {
  const { activeCar } = props;

  return (
    <div className="content">
      <h6>Added features:</h6>
      {activeCar.features.length ? (
        <ol type="1">
          {activeCar.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    activeCar: state.features.activeCar
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddedFeatures);
