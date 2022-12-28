import { fetch_failure, fetch_start, fetch_success } from "./UserTypes"

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const UserReducer = ( state = initialState, action ) => {
    switch(action.type){
        case fetch_start: 
            return{
                ...state,
                loading: false
            }

        case fetch_success: 
            return{
                loading: true,
                users: action.payload,
                error: ''
            }

        case fetch_failure: 
            return{
                loading: true,
                users: [],
                error: action.payload
            }

        default: return state
    }
}

export default UserReducer