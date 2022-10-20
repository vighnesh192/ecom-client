import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setToken } from '../../actions/userActions';

function Navbar(props) {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch()
  useEffect(() => {
  }, [token]);

  const handleLogoutClick = () => {
    localStorage.removeItem('token');
    dispatch(setToken(undefined))
  }
  
  return (
    <nav className='bg-primary flex px-20 py-6 text-white'>
        <NavLink to='/' className='w-1/2'> 
            ShoppIn
        </NavLink>
        <div className='flex w-1/2 justify-end gap-x-10'>
            <NavLink to="/">Home</NavLink>
            {
              !token ? 
              <>
                <NavLink to="signup">Signup</NavLink>
                <NavLink to="signin">Signin</NavLink>
              </>
              :
              <NavLink to="signin" onClick={handleLogoutClick}>Logout</NavLink>
            }
            <NavLink to="about">About</NavLink>
        </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)