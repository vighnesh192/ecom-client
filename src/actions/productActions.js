import axios from "axios";
import { getProductsBySeller, postProduct } from "../services/productServices";

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

export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products
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

export const getProductsBySellerAction = (sellerId) => {
    return (dispatch) => {
        dispatch(setProductLoading);
        getProductsBySeller(sellerId)
            .then(
                products => {
                    dispatch(setProducts(products));
                    dispatch(unsetProductLoading());
                },
                err => dispatch(unsetProductLoading())
            )
            .catch(
                err => dispatch(unsetProductLoading())
            );
    }
}