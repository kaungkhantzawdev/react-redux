import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from "../../redux"


const  HookCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (

        <>
            <div>HookCakeContainer</div>
            <h1>numberOfCakes - { numberOfCakes }</h1>
            <button onClick={ () => dispatch(buyCake())}>buy cake</button>
        </>
        
    )
}

export default HookCakeContainer