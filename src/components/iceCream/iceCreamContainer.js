import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from "../../redux"


const  iceCreamContainer = () => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()
    return (

        <>
            <div>iceCreamContainer</div>
            <h1>numberOfIceCream - { numberOfIceCream }</h1>
            <button onClick={ () => dispatch( buyIceCream())}>buy cake</button>
        </>
        
    )
}

export default iceCreamContainer