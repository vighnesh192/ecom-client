import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className='bg-primary flex px-20 py-6 text-white'>
        <NavLink to='/' className='w-1/2'> 
            ShoppIn
        </NavLink>
        <div className='flex w-1/2 justify-end gap-x-10'>
            <NavLink to="/">Home</NavLink>
            {
              !props.user.profile.token ? 
              <>
                <NavLink to="signup">Signup</NavLink>
                <NavLink to="signin">Signin</NavLink>
              </>
              :
              <></>
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