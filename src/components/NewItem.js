import React from "react";
import { connect } from "react-redux";
// import {buyCake} from "../../redux"
const NewItem = (props) => {
    return ( 
        <>
            <h1>Item - {props.cakes}</h1>
            {/* <button onClick={props.buyCake}>buy cake</button> */}
        </>
     );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake? state.cake.numberOfCakes : state.iceCream.numberOfIceCream
    return {
        cakes: itemState
    }
}

// const mapDispatchToProps = dispatch => {
//     return{
//         buyCake: () => dispatch(buyCake())
//     }
// }
 
export default connect(
    mapStateToProps, 
    ) 
    (NewItem);