import { ADD_FEATURE, REMOVE_FEATURE, SELECT_CAR } from "../actions/types";

const initialState = {
  additionalPrice: 0,
  cars: [
    {
      id: 1,
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: [],
      additionalFeatures: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 }
      ]
    },
    {
      id: 2,
      price: 59995,
      name: "2020 Chevy Corvette",
      image:
        "https://cdn.motor1.com/images/mgl/2olWn/s5/2020-chevrolet-corvette.jpg",
      features: [],
      additionalFeatures: [
        { id: 1, name: "Convertible", price: 7500 },
        { id: 2, name: "Premium Paint", price: 995 },
        { id: 3, name: "Z51 Performance Package", price: 5000 },
        { id: 4, name: "High wing spoiler", price: 1150 }
      ]
    }
  ],
  activeCar: {}
};

const featureReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FEATURE:
      console.log(payload);
      if (!state.activeCar.features.includes(payload)) {
        return {
          ...state,
          additionalPrice: state.additionalPrice + payload.price,
          activeCar: {
            ...state.activeCar,
            features: [...state.activeCar.features, payload],
            additionalFeatures: [
              ...state.activeCar.additionalFeatures.filter(
                obj => obj.id !== payload.id
              )
            ]
          }
        };
      } else {
        return state;
      }
    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - payload.price,
        activeCar: {
          ...state.activeCar,
          features: [
            ...state.activeCar.features.filter(obj => obj.id !== payload.id)
          ],
          additionalFeatures: [...state.activeCar.additionalFeatures, payload]
        }
      };
    case SELECT_CAR:
      if (state.activeCar.id !== payload.id) {
        return {
          ...state,
          activeCar: {
            ...payload
          }
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return state;
  }
};

export default featureReducer;
