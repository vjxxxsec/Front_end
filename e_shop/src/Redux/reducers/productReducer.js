import { selectedproduct } from "../actions/productaction";
import { ActionTypes } from "../constants/action-types";

const initialstate  = {
    products:[]
} 

 export const productReducer =( state=initialstate , {type,payload}) =>{

    switch(type) {
        case ActionTypes.SET_PRODUCT:
            return {
                ...state, products: payload
            } 
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
        
    }
}

export const selectedproductreducer = (state ={}, {type,payload}) =>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,...payload
            }
    
        default:
            return state   
         }
}


