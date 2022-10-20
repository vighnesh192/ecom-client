import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { setToken, setUserProfileSuccess } from './actions/userActions';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/auth/checkLoggedIn', { 'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
      .then((res) => {
        if(res.data.loggedIn) {
          console.log("LoggedIn", res.data);
          dispatch(setUserProfileSuccess(res.data.profile))
          dispatch(setToken({token: localStorage.getItem('token')}))
        }
      })
      .catch(err => {
        localStorage.removeItem('token');
        navigate('signin')
      })
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/signin' element={<SigninPage />}></Route>
      </Routes>
    </>
  )
}
