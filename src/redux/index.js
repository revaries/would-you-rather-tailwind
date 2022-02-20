import appReducer from "./reducers";

const { createStore } = require("redux");

const store = createStore(appReducer);


export default store;