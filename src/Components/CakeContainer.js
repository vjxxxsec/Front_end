import React  from 'react'
import { buycake_fun } from '../Redux/index1'
import { connect } from 'react-redux'


function CakeContainer( props){
    return(

        <div>
             <p> no of cakes : {props.no_ofcakes}</p>
            <button onClick={props.buycake_fun}>Buy cake </button>
        </div>
       
    )
    }

const mapstatetoprops = state =>{
    return{
     no_ofcakes: state.cake.no_ofcakes
    }
} 

const mapdispatchtoprops = dispatch =>{
    return{
        buycake_fun :  () => dispatch(buycake_fun())
    }
}


export default connect (mapstatetoprops,mapdispatchtoprops) (CakeContainer) 