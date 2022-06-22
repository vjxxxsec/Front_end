import React  from 'react'
import { buyicecream_fun } from '../Redux/index1'
import { connect } from 'react-redux'


function icecreamContainer( props){
    return(
  
       <div>
             <p> no of icecreams : {props.no_oficecreams}</p>
            <button onClick={props.buyicecream_fun}>Buy ice</button>
       </div>
    )
    }

const mapstatetoprops = state =>{
    return{
     no_oficecreams:state.icecream.no_oficecreams
    }
} 

const mapdispatchtoprops = dispatch =>{
    return{
       
        buyicecream_fun:() => dispatch(buyicecream_fun())
    }
}


export default connect (mapstatetoprops,mapdispatchtoprops) (icecreamContainer) 