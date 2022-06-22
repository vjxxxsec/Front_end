import { ActionTypes } from "../constants/action-types"

export const setproduct= (products) =>{
    return{
        type : ActionTypes.SET_PRODUCT,
        payload : products
    };
};


export const selectedproduct= (product) =>{
    return{
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product
    };
};


export const removeselectedproducts= () =>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,

    }
}