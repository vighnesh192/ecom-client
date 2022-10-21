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

export const setToken = (token) => {
    return {
        type: 'SET_TOKEN',
        payload: token
    }
}

export const signUpAction = (data) => {
    return (dispatch) => {
        dispatch(setUserLoading())
        axios.post('/auth/register', data)
            .then((res) => {
                dispatch(setUserProfileSuccess(res.data));
                dispatch(unsetUserLoading());  
            })
        }
}
    
export const signInAction = (data) => {
    return (dispatch) => {
        dispatch(setUserLoading())
        axios.post('/auth/login', data)
        .then((res) => {
            dispatch(setUserProfileSuccess(res.data));
            dispatch(setToken(res.data))
            dispatch(unsetUserLoading());  
        })
    }
}

export const setUserProfileAction = ({id, token}) => {
    return (dispatch) => {
        dispatch(setUserLoading())
        axios.get(`users/${id}`, { 'headers': { 'Authorization': `Bearer ${token}` } })
            .then((res) => {
                dispatch(setUserProfileSuccess(res.data));
                if(res.data.token) dispatch(setToken(res.data))
                dispatch(unsetUserLoading());  
            })
    }
}

export const checkLoggedInAction = (token, navigate) => {
    return (dispatch) => {
        dispatch(setUserLoading())
        axios.get('/auth/checkLoggedIn', { 'headers': { 'Authorization': `Bearer ${token}` } })
            .then((res) => {
                if(res.data.loggedIn) {
                    dispatch(setUserProfileSuccess(res.data.profile))
                    dispatch(setToken({token: localStorage.getItem('token')}))
                    localStorage.setItem('id', res.data.profile.id);
                }
            })
            .catch(err => {
                localStorage.removeItem('token');
                navigate('signin')
            })
    }
}