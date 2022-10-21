import React, { useState, useEffect } from 'react';
import Form from '../components/Form/Form';
import { connect } from 'react-redux';
import { signUpAction } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';

function SignupPage(props) {
  const fields = [
    {
      fieldName: 'First Name',
      type: 'text',
      twoCols: true,
    },
    {
      fieldName: 'Last Name',
      type: 'text',
      twoCols: true,
    },
    {
      fieldName: 'Phone No',
      type: 'number',
      twoCols: false,
    },
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
    {
      fieldName: 'Address Line1',
      type: 'text',
      twoCols: false,
    },
    {
      fieldName: 'Address Line2',
      type: 'text',
      twoCols: false,
    },
    {
      fieldName: 'Pin code',
      type: 'number',
      twoCols: false,
    },
  ]

  const navigate = useNavigate();

  useEffect(() => {
    console.log('USER STATE' ,props.user);
  }, [props.user])
  

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    pincode: null,
    phoneNo: null,
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
    const {firstName, lastName, email, password, phoneNo, pincode, addressLine1, addressLine2} = userDetails; 
    const data = {
      firstName,
      lastName,
      email, 
      password,
      address: {
        line1: addressLine1,
        line2: addressLine2,
        pincode
      },
      phoneNo,
      type: 'Customer'
    }
    props.setUserProfile(data);
    if(props.user.profile) navigate('/signin');
  }

  return (
    <div className='flex justify-center mt-20'>
      <div className="w-96">
        <Form onSubmit={handleSubmit} handleOnChange={handleOnChange} fields={fields} action="Sign Up" />
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
    setUserProfile: (userData) => dispatch(signUpAction(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)