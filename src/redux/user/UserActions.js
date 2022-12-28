import { fetch_failure, fetch_start, fetch_success } from "./UserTypes"

export const fetchStart = () => {
    return{
        type: fetch_start
    }
}

export const fetchSuccess = ( users ) => {
    return{
        type: fetch_success,
        payload: users
    }
}

export const fetchFailure = ( error ) => {
    return {
        type: fetch_failure,
        payload: error
    }
}
