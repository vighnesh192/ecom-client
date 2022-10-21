import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken, setUserProfileAction } from '../actions/userActions';

function Profile(props) {
    const user = useSelector(state => state.user);
    // const token = useSelector(state => state.user.token);
    // const [token, setTokenState] = useState(localStorage.getItem('token'))
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    useEffect(() => {
      const id = localStorage.getItem('id');
      dispatch(setUserProfileAction({id, token}))
      dispatch(setToken({token}));
    }, [])
    
    return (
        <div>Profile</div>
    )
}

export default Profile