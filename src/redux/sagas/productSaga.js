import { call, put, takeEvery } from "redux-saga/effects";
const productsMock = [
  {
    id: 1,
    name: "Apple",
    inStock: true,
    selected: false,
  },
  {
    id: 2,
    name: "Orange",
    inStock: false,
    selected: false,
  },
  {
    id: 3,
    name: "Banana",
    inStock: false,
    selected: true,
  },
];

function getProductsMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsMock);
    }, 2000);
  });
}

function* fetchProducts(action) {
  try {
    const products = yield call(getProductsMock);
    yield put({ type: "GET_PRODUCTS_SUCCESS", products: products });
  } catch (e) {
    yield put({ type: "GET_PRODUCTS_FAILED", message: e.message });
  }
}

function* productSaga() {
  yield takeEvery("GET_PRODUCTS_REQUESTED", fetchProducts);
}

export default productSaga;
