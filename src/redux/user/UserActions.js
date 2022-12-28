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

export const fetchUsers = ( ) => {
   return(dispatch) => {
    dispatch(fetchStart())
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            dispatch(fetchSuccess(json))
            console.log(json)
        })
        .catch((err) => {
            dispatch(fetchFailure(err))
        })
   }
}