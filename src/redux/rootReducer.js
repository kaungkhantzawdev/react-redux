import { combineReducers } from "@reduxjs/toolkit";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cakeReducer from "./cake/cakeReducer"
import UserReducer from "./user/UserReducer"

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: UserReducer
})

export default rootReducer