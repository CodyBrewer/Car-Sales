import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/types";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FEATURE:
      console.log(payload);
      if (!state.car.features.includes(payload)) {
        return {
          ...state,
          additionalPrice: state.additionalPrice + payload.price,
          car: {
            ...state.car,
            features: [...state.car.features, payload]
          },
          additionalFeatures: [
            ...state.additionalFeatures.filter(obj => obj.id !== payload.id)
          ]
        };
      } else {
        return state;
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - payload.price,
        car: {
          ...state.car,
          features: [...state.car.features.filter(obj => obj.id !== payload.id)]
        },
        additionalFeatures: [...state.additionalFeatures, payload]
      };
    default:
      return state;
  }
};

export default carReducer;
