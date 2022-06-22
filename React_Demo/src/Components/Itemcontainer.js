import React from 'react'
import { connect } from 'react-redux'
function Itemcontainer(props){
    return(
        <div>
            <h2>Item -  {props.item}</h2>
        </div>
    )
}

const mapstatetoprops = (state,ownProps) =>{
    const itemstate = ownProps.cake ? state.cake.no_ofcakes
    :state.icecream.no_oficecreams
    return{
        item:itemstate
    }
}

export default connect(mapstatetoprops)(Itemcontainer)