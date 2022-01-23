import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index.js";
import rootSaga from "./sagas/index";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
// const store = applyMiddleware([sagaMiddleware, logger])createStore(rootReducer);
const store = createStore(rootReducer, applyMiddleware(...[sagaMiddleware, logger]));
// const store = compose(applyMiddleware(sagaMiddleware), window.devToolsExtension && window.devToolsExtension())(createStore(rootReducer));

sagaMiddleware.run(rootSaga);

export default store;
