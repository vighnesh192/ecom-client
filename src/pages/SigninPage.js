import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInAction } from '../actions/userActions';
import Form from '../components/Form/Form';

function SigninPage(props) {
    const fields = [
        {
            fieldName: 'Email',
            type: 'email',
            twoCols: false,
        },
        {
            fieldName: 'Password',
            type: 'password',
            twoCols: false,
        },
    ]

    const navigate = useNavigate();

    useEffect(() => {
        if(props.user?.profile?.token) localStorage.setItem('token', props.user?.profile?.token)
        if(localStorage.getItem('token')) navigate("/");
    }, [props.user])
    

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    })

    // Create onChange(event) {}
    const handleOnChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = userDetails; 
        const data = {
            email, 
            password,
        }
        props.setUserProfile(data);
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className="w-96">
                <Form onSubmit={handleSubmit} handleOnChange={handleOnChange} fields={fields} action="Sign In" />
            </div>
        </div>
    )
}
    
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userData) => dispatch(signInAction(userData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SigninPage);