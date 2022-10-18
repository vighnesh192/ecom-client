import axios from "axios"

const setUserLoading = () => {
    return {
        type: 'SET_USER_LOADING'
    }
}

const unsetUserLoading = () => {
    return {
        type: 'UNSET_USER_LOADING'
    }
}

export const setUserProfileSuccess = (userData) => {
    return {
        type: 'SET_USER_PROFILE_SUCCESS',
        payload: userData
    }
}

export const signUpAction = (data) => {
    console.log("ACTION Data", data);
    return (dispatch) => {
        dispatch(setUserLoading())
        axios.post('/auth/register', data)
            .then((res) => {
                console.log("RESPONSE", res.data)
                dispatch(setUserProfileSuccess(res.data));
                dispatch(unsetUserLoading());  
            })
    }
}

export const signInAction = (data) => {
    console.log("ACTION Data", data);
    return (dispatch) => {
        dispatch(setUserLoading())
        axios.post('/auth/login', data)
            .then((res) => {
                console.log("RESPONSE", res.data)
                dispatch(setUserProfileSuccess(res.data));
                dispatch(unsetUserLoading());  
            })
    }
}