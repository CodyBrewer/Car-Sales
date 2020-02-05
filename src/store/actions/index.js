import { ADD_FEATURE, REMOVE_FEATURE, SELECT_CAR } from "./types";

export const addFeature = feature => ({
  type: ADD_FEATURE,
  payload: feature
});

export const removeFeature = feature => ({
  type: REMOVE_FEATURE,
  payload: feature
});

export const selectCar = car => ({
  type: SELECT_CAR,
  payload: car
});
