const initialState = {
    isLoading: false,
    products: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCT_LOADING':
            return {
                ...state,
                isLoading: true
            }
        
        case 'UNSET_PRODUCT_LOADING':
            return {
                ...state,
                isLoading: false
            }

        case 'SET_POST_PRODUCT_SUCCESS':
            console.log("PRODUCT ADDED:- ", action)
            return {
                ...state,
                products: [...state.products, action.payload]
            }
    
        default:
            return {
                ...state
            }
    }
}

export default productReducer;

