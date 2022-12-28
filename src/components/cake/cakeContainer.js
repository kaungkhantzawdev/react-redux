import React from "react";
import { connect } from "react-redux";
import {buyCake} from "../../redux"
const CakeContainer = (props) => {
    return ( 
        <>
            <h1>Number of cake - {props.cakes}</h1>
            <button onClick={props.buyCake}>buy cake</button>
        </>
     );
}

const mapStateToProps = state => {
    return{
        cakes: state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(
    mapStateToProps, 
    mapDispatchToProps) 
    (CakeContainer);