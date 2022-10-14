const initialState = {
    isLoading: false,
    profile: undefined
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
            console.log('in SET_USER_PROFILE_SUCCESS reducer')
            return {
                ...state,
                profile: action.payload
            }
    
        default:
            return {
                ...state
            }
    }
}

export default userReducer;