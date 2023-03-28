import axios from "axios";
import { postProduct } from "../services/productServices";

const setProductLoading = () => {
    return {
        type: 'SET_PRODUCT_LOADING'
    }
}

const unsetProductLoading = () => {
    return {
        type: 'UNSET_PRODUCT_LOADING'
    }
}

export const postProductSuccess = (productData) => {
    return {
        type: 'SET_POST_PRODUCT_SUCCESS',
        payload: productData
    }
}

export const postProductAction = (token, data) => {

    return (dispatch) => {
        dispatch(setProductLoading());
        postProduct(token, data)
            .then(
                product => dispatch(postProductSuccess(product)),
                err => dispatch(unsetProductLoading())
            )
            .catch(
                err => dispatch(unsetProductLoading())
            );
        dispatch(unsetProductLoading());
    }

}