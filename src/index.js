import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./Components/App";
import "./styles/index.css";

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
