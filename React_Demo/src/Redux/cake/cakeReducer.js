import { buycake } from "./cakeTypes"

const initialstate = {
    no_ofcakes:20,
    
}

const cakeReducer = (state = initialstate,action) =>{
    switch(action.type){
        case buycake:
            return{
                ...state,
                no_ofcakes:state.no_ofcakes-1 
            }

        default:
            return state
    }
}
export default cakeReducer