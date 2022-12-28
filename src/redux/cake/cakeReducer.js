import { buy_cake } from "./cakeTypes";

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case buy_cake:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1 
            }

        default: return state
    }
}
 
export default cakeReducer;