import * as type from "../types";

export function getProducts() {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
  };
}

export function selectProduct(id) {
  return {
    type: type.SELECT_PRODUCT,
    payload: id,
  };
}
export function unselectProduct(id) {
  return {
    type: type.UNSELECT_PRODUCT,
    payload: id,
  };
}
