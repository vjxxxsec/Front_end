import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { buycake_fun } from '../Redux/index1'


function Hookcakecontainer(){
    const no_ofcakes = useSelector(state => state.cake.no_ofcakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>No.of cakes:{no_ofcakes}</h1>
            <button onClick={() => dispatch(buycake_fun())}>Buy cake</button>
        </div>
    ) 
}

export default Hookcakecontainer
