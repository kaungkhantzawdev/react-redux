import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from "../../redux"


const  IceCreamContainer = () => {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream)
    const dispatch = useDispatch()
    return (

        <>
            <div>IceCreamContainer</div>
            <h1>numberOfIceCream - { numberOfIceCream }</h1>
            <button onClick={ () => dispatch( buyIceCream())}>buy cake</button>
        </>
        
    )
}

export default IceCreamContainer