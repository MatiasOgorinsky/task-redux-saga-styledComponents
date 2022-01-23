import * as type from "../types";
import { without } from "lodash";

const initialState = {
  products: [],
  loading: false,
  error: null,
  selected: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products,
      };
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    case type.SELECT_PRODUCT:
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    case type.UNSELECT_PRODUCT:
      return {
        ...state,
        selected: without(state.selected, action.payload),
      };
    default:
      return state;
  }
}
