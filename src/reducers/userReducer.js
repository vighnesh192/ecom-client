const initialState = {
    isLoading: false,
    profile: undefined,
    token: undefined
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_LOADING':
            return {
                ...state,
                isLoading: true
            }
        
        case 'UNSET_USER_LOADING':
            return {
                ...state,
                isLoading: false
            }

        case 'SET_USER_PROFILE_SUCCESS':
            return {
                ...state,
                profile: action.payload
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.payload.token
            }
    
        default:
            return {
                ...state
            }
    }
}

export default userReducer;