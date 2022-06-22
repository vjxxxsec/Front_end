import { buyicecream } from "./icreamTypes"

const initialstate = {
    no_oficecreams:10   
}

const icecreamReducer = (state = initialstate,action) =>{
    switch(action.type){
        case buyicecream:
            return{
                ...state,
                no_oficecreams:state.no_oficecreams-1 
                }
        default:
            return state
    }
}

export default icecreamReducer