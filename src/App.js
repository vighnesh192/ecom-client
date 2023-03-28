import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { checkLoggedInAction } from './actions/userActions';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import SellerProductsPage from './pages/SellerProductsPage';
import SellerProfile from './pages/SellerProfile';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoggedInAction(localStorage.getItem('token'), navigate))
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<SignupPage />}></Route>
        <Route path='/signin' element={<SigninPage />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/sellerProfile' element={<SellerProfile />}></Route>
        <Route path='/sellerProducts' element={<SellerProductsPage />}></Route>
      </Routes>
    </>
  )
}
