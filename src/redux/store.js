import { createStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer)
 
export default store;