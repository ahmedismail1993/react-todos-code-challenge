import { createStore, compose } from "redux";

import reducer from "../reducers/index";
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, compose(reduxDevTool));

export default store;
