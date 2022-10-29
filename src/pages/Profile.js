import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { checkLoggedInAction, setToken, setUserProfileAction, updateProfileAction } from '../actions/userActions';
import Form from '../components/Form/Form';
import { getProfileDetailsService } from '../services/userServices';

function Profile(props) {
  const profile = useSelector(state => state.user.profile);
  
  const [fields, setFields] = useState([])
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoggedInAction(localStorage.getItem('token'), navigate))
  }, [])
  
  
  useEffect(() => {
    let firstName, lastName, phoneNo, email, address;
    if(profile) {
      ({ firstName, lastName, phoneNo, email, address } = profile);
    }
    console.log("Profile", profile)
    setFields([
      {
        fieldName: 'First Name',
        type: 'text',
        twoCols: true,
        initialVal: firstName
      },
      {
        fieldName: 'Last Name',
        type: 'text',
        twoCols: true,
        initialVal: lastName
      },
      {
        fieldName: 'Phone No',
        type: 'number',
        twoCols: false,
        initialVal: phoneNo
      },
      {
        fieldName: 'Email',
        type: 'email',
        twoCols: false,
        initialVal: email
      },
      {
        fieldName: 'Address Line1',
        type: 'text',
        twoCols: false,
        initialVal: address?.line1
      },
      {
        fieldName: 'Address Line2',
        type: 'text',
        twoCols: false,
        initialVal: address?.line2
      },
      {
        fieldName: 'Pin code',
        type: 'number',
        twoCols: false,
        initialVal: address?.pincode
      },  
      {
        fieldName: 'Type',
        type: 'select',
        options: ['Customer', 'Seller'],
        twoCols: false,
      },
    ])
  }, [])

  
  
  // const setFields = () => {
    //   return 
    // }
    
    const [userDetails, setUserDetails] = useState({
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      pincode: null,
      phoneNo: null,
      email: '',
      type: 'Customer'
  })
  
  useEffect(() => {
  }, [fields, userDetails])

  useEffect(() => {
    const id = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    dispatch(setUserProfileAction({id, token}))
    dispatch(setToken({token}));
    getProfileDetails(id, token);
  }, [])

  const getProfileDetails = async (id, token) => {
    const data = await getProfileDetailsService(id, token);
    data.addressLine1 = data.address.line1;
    data.addressLine2 = data.address.line2;
    data.pincode = data.address.pincode;
    setUserDetails(data);
  }
  
    // Create onChange(event) {}
  const handleOnChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName, lastName, email, phoneNo, pincode, addressLine1, addressLine2, type} = userDetails; 
    const data = {
      firstName,
      lastName,
      email, 
      address: {
        line1: addressLine1,
        line2: addressLine2,
        pincode
      },
      phoneNo,
      type
    }
    dispatch(updateProfileAction(localStorage.getItem('id'), data, localStorage.getItem('token')))
  }
    
    return (
      <div className='flex justify-center mt-20'>
        <div className="w-96">
          {
            fields.length > 0 ?
            <Form onSubmit={handleSubmit} handleOnChange={handleOnChange} initialValues={userDetails} fields={fields} action="Update" />
            :
            <></>
          }
        </div>
      </div>
    )
}

export default Profile