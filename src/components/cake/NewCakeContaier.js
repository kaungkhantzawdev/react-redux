import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from "../../redux"


const  NewCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()

    const [number, setNumber] = useState('')
    return (

        <>
            <div>NewCakeContainer</div>
            <h1>numberOfCakes - { numberOfCakes }</h1>
            <input type="number" value={ number } onChange={ (e) => setNumber(e.target.value) }/>
            <button onClick={ () => dispatch(buyCake(number))}>buy { number } cake</button>
        </>
        
    )
}

export default NewCakeContainer