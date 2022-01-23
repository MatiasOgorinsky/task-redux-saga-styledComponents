import { createSelector } from "reselect";

const getState = (state) => state.products || {};

const getSelected = createSelector(getState, (products) => products.selected || []);
const getId = (_, id) => id;

export const isSelected = createSelector([getSelected, getId], (state, id) => {
  return state.includes(id);
});
// cadena de funciones memoizadas

export const getProductsList = createSelector(getState, (state) => state.products);
export const getLoading = createSelector(getState, (state) => state.loading);
export const getError = createSelector(getState, (state) => state.error);
