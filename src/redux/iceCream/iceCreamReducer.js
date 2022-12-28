import { buy_iceCream } from "./iceCreamTypes"

const initialState = {
    numberOfIceCream: 20
}

const iceCreamReducer = ( state = initialState, action ) => {
    switch(action.type){
        case buy_iceCream:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }

        default: return state
    }
}

export default iceCreamReducer